<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateLetterRequest;
use App\Http\Requests\UpdateLetterRequest;
use App\Http\Resources\ConfirmLetterDetailResource;
use App\Http\Resources\ConfirmLetterListResource;
use App\Http\Resources\PDFConfirmLetterResource;
use App\Models\Letter;
use App\Models\Organization;
use App\Models\Package;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ConfirmLetterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        Gate::authorize('letter_access');

        $data = Letter::all();
        $data->load('hasNotes', 'hasPackages');
        $lists = ConfirmLetterListResource::collection($data);
        
        return Inertia::render('ConfirmLetter/Index', [
            'letters' => $lists,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('ConfirmLetter/Create', [
            'organizations' => Organization::all(),
            'events' => eventSelectOptions(),
            'rooms' => roomSelectOptions(),
            'packages' => Package::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateLetterRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try{
            $validated = $request->validated();
            $letterObject = $this->createLetterObject($validated);

            $letter = Letter::create($letterObject);
            foreach($request->input('notes', []) as $note){
                if(isset($note['start_date'])) {
                    $notes = $letter->hasNotes()->create([
                        'start_date' => $note['start_date'],
                        'end_date' => $note['end_date'],
                    ]);
                }

                foreach($note['lists'] as $package){
                    if(isset($package['package']) || isset($package['note'])){
                        $packageObject = $this->createNotePackageObject($package);
                        $notes->notePackage()->create($packageObject);
                    }
                }
            }

            foreach($request->input('schedules', []) as $schedule){
                if(isset($schedule['date'])){
                    $notes = $letter->hasFnb()->create($schedule);
                }
            }

            DB::commit();
            return Redirect::route('confirm-letter.index')->with('toast-success', 'Confirmation Letter Created!');
        } catch(\Exception $e) {
            DB::rollBack();
            return Redirect::back()->withErrors([
                'error' => $e->getMessage(),
            ])->withInput();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Letter $letter): Response
    {
        $letter->load('createdBy', 'organization', 'contact', 'event', 'room', 'hasNotes.notePackage.package', 'hasFnb');

        $letterResource = new ConfirmLetterDetailResource($letter);
        return Inertia::render('ConfirmLetter/Show', [
            'letter' => $letterResource,
            'organizations' => Organization::all(),
            'events' => eventSelectOptions(),
            'rooms' => roomSelectOptions(),
            'packages' => Package::all(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Letter $letter): Response
    {
        $letter->load('createdBy', 'organization', 'contact', 'event', 'room', 'hasNotes.notePackage.package', 'hasFnb');

        $letterResource = new ConfirmLetterDetailResource($letter);
        return Inertia::render('ConfirmLetter/Edit', [
            'letter' => $letterResource,
            'organizations' => Organization::all(),
            'events' => eventSelectOptions(),
            'rooms' => roomSelectOptions(),
            'packages' => Package::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLetterRequest $request, Letter $letter): RedirectResponse
    {
        DB::beginTransaction();
        try{
            $validated = $request->validated();
            $letterObject = $this->createLetterObject($validated);

            $letter->fill($letterObject);
            $letter->save();

            // Handle note
            $notesData = $request->input('notes', []);

            // Get the current note IDs
            $existingNoteIds = $letter->hasNotes()->pluck('id')->toArray();
            $newNoteIds = collect($notesData)->pluck('id')->filter()->toArray(); // Only keep non-null IDs

            // Delete notes that are not in the update request
            $notesToDelete = array_diff($existingNoteIds, $newNoteIds);
            $letter->hasNotes()->whereIn('id', $notesToDelete)->delete();

            foreach($notesData as $note){
                if(isset($note['start_date'])) {
                    $notes = $letter->hasNotes()->updateOrCreate([
                        'start_date' => $note['start_date'],
                        'end_date' => $note['end_date'],
                    ]);

                    // Handle note package
                    $notePackage = $note['lists'] ?? [];

                    // Get the current package IDs for the note
                    $existingPackageIds = $notes->notePackage()->pluck('id')->toArray();
                    $newPackageIds = collect($notePackage)->pluck('id')->filter()->toArray();

                    // Delete subsections that are not in the update request
                    $packageToDelete = array_diff($existingPackageIds, $newPackageIds);
                    $notes->notePackage()->whereIn('id', $packageToDelete)->delete();

                    foreach($notePackage as $package){
                        if(isset($package['package']) || isset($package['note'])){
                            $packageObject = $this->createNotePackageObject($package);
                            $notes->notePackage()->updateOrCreate($packageObject);
                        }
                    }
                }
            }

            // Handle schedule
            $schedulesData = $request->input('schedules', []);

            // Get the current note IDs
            $existingScheduleIds = $letter->hasFnb()->pluck('id')->toArray();
            $newScheduleIds = collect($schedulesData)->pluck('id')->filter()->toArray(); // Only keep non-null IDs

            // Delete notes that are not in the update request
            $schedulesToDelete = array_diff($existingScheduleIds, $newScheduleIds);
            $letter->hasFnb()->whereIn('id', $schedulesToDelete)->delete();

            foreach($schedulesData as $schedule){
                if(isset($schedule['date'])){
                    $letter->hasFnb()->updateOrCreate($schedule);
                }
            }

            DB::commit();
            return Redirect::route('confirm-letter.index')->with('toast-success', 'Confirmation Letter Updated!');
        } catch(\Exception $e) {
            DB::rollBack();
            return Redirect::back()->withErrors([
                'error' => $e->getMessage(),
            ])->withInput();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Letter $letter): RedirectResponse
    {
        Gate::authorize('letter_delete');

        $letter->delete();
        return Redirect::back()->with('toast-success', 'Confirmation Letter Deleted!');
    }

    private function createLetterObject(array $input): array
    {
        return [
            'created_by' => $input['sales'],
            'organization_id' => $input['organization'],
            'contact_id' => $input['contact'],
            'event_id' => $input['event'],
            'room_id' => $input['room'],
            'check_in' => convertToJakartaTime($input['check_in']),
            'check_out' => convertToJakartaTime($input['check_out']),
            'attendance' => $input['attendance'],
            'payment' => $input['payment'],
        ];
    }

    private function createNotePackageObject(array $input): array
    {
        return [
            'package_id' => $input['package'],
            'qty' => $input['qty'],
            'price' => $input['price'],
            'note' => $input['note'],
        ];
    }

    public function exportPDF(Request $request, Letter $letter)
    {
        $letter->load('createdBy', 'organization', 'contact', 'event', 'room', 'hasNotes.notePackage.package', 'hasFnb');
        $data = json_encode(new PDFConfirmLetterResource($letter));

        if($request->has('preview')){
            $css = asset('css/confirm-letter.css');
            $logo = asset('ole-suites-hotel-cottage.png');
            return view('generate-pdf', compact('data', 'css', 'logo'));
        }

        $css = public_path('css\confirm-letter.css');
        $logo = public_path('ole-suites-hotel-cottage.png');

        $pdf = Pdf::loadView('generate-pdf', compact('data', 'css', 'logo'));
        
        $pdf->set_option('isHtml5ParserEnabled', true);
        $pdf->set_option('isPhpEnabled', true);
        $pdf->setPaper('A4', 'portrait');
        
        $filename = 'CL'.$letter->id.'-'.$letter->organization->name;
        return $pdf->stream("$filename.pdf");
    }
}
