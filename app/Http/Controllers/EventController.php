<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateEventRequest;
use App\Http\Resources\EventListResource;
use App\Models\Event;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $data = Event::all();

        return Inertia::render('Event/Index', [
            'events' => EventListResource::collection($data),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Event/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateEventRequest $request):RedirectResponse
    {
        DB::beginTransaction();
        try {
            $validated = $request->validated();
            Event::create($validated);

            DB::commit();
            return Redirect::route('events.index')->with('toast-success', 'Event created');
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
