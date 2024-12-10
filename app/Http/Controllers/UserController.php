<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserListResource;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        Gate::authorize('user_access');

        $data = User::all();
        $data->load('hasRoles');
        $lists = UserListResource::collection($data);

        return Inertia::render('User/Index', [
            'users' => $lists,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('User/Create', [
            'roles' => roleSelectOptions(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    // public function store(CreateUserRequest $request): RedirectResponse
    {
        dd($request->input());

        DB::beginTransaction();
        try {
            $validated = $request->validated();

            $user = User::create($validated);
            $user->hasRoles()->sync($validated['role']);
            if($validated['sign']){
                $user->addMedia($validated['sign'])->toMediaCollection('signs');
            }

            DB::commit();

            return Redirect::route('users.index')->with('toast-success', 'User created!');
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
    public function edit(User $user): Response
    {
        $user->load('hasRoles');
        return Inertia::render('User/Edit', [
            'roles' => roleSelectOptions(),
            'user' => $user,
            'sign' => $user->getFirstMediaUrl('signs'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user): RedirectResponse
    {
        DB::beginTransaction();
        try {
            $validated = $request->validated();

            $user->fill($validated);
            $user->save();
            $user->hasRoles()->sync($validated['role']);

            if($validated['sign']){
                $user->clearMediaCollection('signs'); // Remove the old image
                $user->addMedia($validated['sign'])->toMediaCollection('signs');
            }

            DB::commit();
            return Redirect::route('users.index')->with('toast-success', 'User Updated!');
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
    public function destroy(User $user): RedirectResponse
    {
        Gate::authorize('user_delete');

        $user->clearMediaCollection('signs');
        $user->delete();
        return Redirect::back()->with('toast-success', 'User Deleted!');
    }
}
