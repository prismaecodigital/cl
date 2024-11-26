<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateLetterRequest;
use App\Http\Resources\ConfirmLetterDetailResource;
use App\Http\Resources\ConfirmLetterListResource;
use App\Models\Letter;
use App\Models\Organization;
use App\Models\Package;
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
                $notes = $letter->hasNotes()->create([
                    'start_date' => $note['start_date'],
                    'end_date' => $note['end_date'],
                ]);

                foreach($note['lists'] as $package){
                    $packageObject = $this->createNotePackageObject($package);
                    $notes->notePackage()->create($packageObject);
                }
            }

            DB::commit();
            return Redirect::route('confirm-letter.index')->with('success', 'Confirmation Letter Created!');
        } catch(\Exception $e) {
            DB::rollBack();
            dd($e);
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
        // dd(json_encode($letter));

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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
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
            'note' => $input['note']
        ];
    }
}
