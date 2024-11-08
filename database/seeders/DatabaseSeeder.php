<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\RolePermission;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            RoleSeeder::class,
            PermissionsSeeder::class,

            RolePermissionSeeder::class,
            UserRoleSeeder::class,

            RoomSeeder::class,
            EventSeeder::class,
            PackageSeeder::class,
            
            OrganizationSeeder::class,
            ContactSeeder::class,

            LetterSeeder::class,
            FnbSeeder::class,
            NoteSeeder::class,
            NotePackageSeeder::class,
        ]);
    }
}
