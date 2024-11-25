<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateContactRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Http\Resources\ContactListResource;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        Gate::authorize('pic_access');

        $data = Contact::all();
        $data->load('organization');

        return Inertia::render('Contact/Index', [
            'contacts' => ContactListResource::collection($data),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Contact/Create', [
            'organizations' => organizationSelectOptions(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateContactRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $validated = $request->validated();
            $validated['organization_id'] = $validated['organization'];

            Contact::create($validated);
            DB::commit();

            return Redirect::route('contacts.index')->with('toast-success', 'PIC created!');
        } catch (\Exception $e) {
            DB::rollBack();
            return Redirect::back()->withErrors([
                'error' => $e->getMessage(),
            ])->withInput();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact): Response
    {
        $contact->load('organization');

        return Inertia::render('Contact/Edit', [
            'contact' => $contact,
            'organizations' => organizationSelectOptions(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request, Contact $contact): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $validated = $request->validated();
            $validated['organization_id'] = $validated['organization'];
            $contact->fill($validated);

            $contact->save();
            DB::commit();

            return Redirect::route('contacts.index')->with('toast-success', 'PIC updated!');
        } catch (\Exception $e) {
            DB::rollBack();
            return Redirect::back()->withErrors([
                'error' => $e->getMessage(),
            ])->withInput();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact): RedirectResponse
    {
        Gate::authorize('pic_delete');

        $contact->delete();
        return Redirect::back()->with('toast-success', 'PIC deleted!');
    }
}
