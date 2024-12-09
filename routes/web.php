<?php

use App\Http\Controllers\ConfirmLetterController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function() {
    Route::resources([
        'database/organizations' => OrganizationController::class,
        'database/contacts' => ContactController::class,
        'database/events' => EventController::class,
        'database/rooms' => RoomController::class,
        'database/packages' => PackageController::class,

        'authorization/users' => UserController::class,
        'authorization/roles' => RoleController::class,
        'authorization/permissions' => PermissionController::class
    ]);

    // Change default param from {confirm_leter} to {letter}
    Route::resource('confirm-letter', ConfirmLetterController::class)
           ->parameters(['confirm-letter' => 'letter']);

    Route::patch('/update-progress/{letter}', [ConfirmLetterController::class, 'updateProgress'])->name('confirm-letter.progress');
    Route::get('/export-confirmation-letter/{letter}', [ConfirmLetterController::class, 'exportPDF'])->name('confirm-letter.export');
    Route::get('/get-contact-organization', [OrganizationController::class, 'getContact'])->name('contactOrganization');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile/{user}', [ProfileController::class, 'index'])->name('profile.index');
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
