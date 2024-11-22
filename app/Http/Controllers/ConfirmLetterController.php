<?php

namespace App\Http\Controllers;

use App\Http\Resources\ConfirmLetterListResource;
use App\Models\Letter;
use App\Models\Organization;
use App\Models\Package;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
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
    public function store(Request $request)
    {
        dd($request->all());
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
    public function destroy(string $id)
    {
        //
    }
}
