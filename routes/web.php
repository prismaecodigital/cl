<?php

use App\Http\Controllers\ConfirmLetterController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
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

Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

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

    // Change default param from {confirm-leter} to {letter}
    Route::resource('confirm-letter', ConfirmLetterController::class)
           ->parameters(['confirm-letter' => 'letter']);

    // Issues when sending file with multipart/form-data can't use method PUT/PATCH
    Route::post('authorization/users/{user}', [UserController::class, 'update'])->name('users.post.update');
    // Update confirmation letter progress
    Route::patch('/update-progress/{letter}', [ConfirmLetterController::class, 'updateProgress'])->name('confirm-letter.progress');
    // Render PDF of confirmation letter
    Route::get('/export-confirmation-letter/{letter}', [ConfirmLetterController::class, 'exportPDF'])->name('confirm-letter.export');
    // Get PIC from selected organization
    Route::get('/get-contact-organization', [OrganizationController::class, 'getContact'])->name('contactOrganization');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile/{user}', [ProfileController::class, 'index'])->name('profile.index');
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
