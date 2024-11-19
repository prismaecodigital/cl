<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePackageRequest;
use App\Http\Requests\UpdatePackageRequest;
use App\Http\Resources\PackageListResource;
use App\Models\Package;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        Gate::authorize('package_access');

        $data = Package::all();
        $lists = PackageListResource::collection($data);

        return Inertia::render('Package/Index', [
            'packages' => $lists,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Package/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreatePackageRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $validated = $request->validated();

            Package::create($validated);
            DB::commit();
            
            return Redirect::route('packages.index')->with('toast-success', 'Package created');
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
    public function edit(Package $package): Response
    {
        return Inertia::render('Package/Edit', [
            'packageData' => $package,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePackageRequest $request, Package $package): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $validated = $request->validated();
            $package->fill($validated);

            $package->save();
            DB::commit();

            return Redirect::route('packages.index')->with('toast-success', 'Package updated!');
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
    public function destroy(Package $package): RedirectResponse
    {
        Gate::authorize('package_delete');

        $package->delete();
        return Redirect::back()->with('toast-success', 'Package deleted!');
    }
}
