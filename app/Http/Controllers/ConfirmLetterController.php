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
use App\Services\LetterService;
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
    protected $letterService;

    public function __construct(LetterService $letterService)
    {
        $this->letterService = $letterService;
    }

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
            $this->letterService->createLetter($validated);

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
            $this->letterService->updateLetter($letter, $validated);

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
     * Update progress from specified confirmation letter
     */
    public function updateProgress(Request $request, Letter $letter): RedirectResponse
    {
        Gate::authorize('letter_edit');

        $letter->fill(['status' => $request->query('status')]);
        $letter->save();

        return Redirect::back()->with('toast-success', 'Confirmation Letter Updated!');
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
