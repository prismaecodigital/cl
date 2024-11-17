<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateRoomRequest;
use App\Http\Resources\RoomListResource;
use App\Models\Room;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $data = Room::all();

        return Inertia::render('Room/Index', [
            'rooms' => RoomListResource::collection($data),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Room/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRoomRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $validated = $request->validated();
            Room::create($validated);

            DB::commit();
            return Redirect::route('rooms.index')->with('toast-success', 'Room created');
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
