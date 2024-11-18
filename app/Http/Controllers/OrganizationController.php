<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateOrganizationRequest;
use App\Http\Requests\UpdateOrganizationRequest;
use App\Http\Resources\OrganizationListResource;
use App\Models\Organization;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $data = Organization::all();
        $lists = OrganizationListResource::collection($data);

        return Inertia::render('Organization/Index', [
            'organizations' => $lists,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Organization/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateOrganizationRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $validated = $request->validated();
            
            Organization::create($validated);
            DB::commit();

            return Redirect::route('organizations.index')->with('toast-success', 'Organization created');
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
    public function edit(Organization $organization): Response
    {
        return Inertia::render('Organization/Edit', [
            'organization' => $organization,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrganizationRequest $request, Organization $organization): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $validated = $request->validated();
            $organization->fill($validated);

            $organization->save();
            DB::commit();

            return Redirect::route('organizations.index')->with('toast-success', 'Organization udpated');
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
    public function destroy(Organization $organization): RedirectResponse
    {
        Gate::authorize('organization_delete');

        $organization->delete();
        return Redirect::back()->with('toast-success', 'Organization deleted');
    }
}
