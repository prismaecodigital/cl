<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'dashboard_access', // 1

            'letter_access', // 2
            'letter_create', // 3
            'letter_edit', // 4
            'letter_delete', // 5
            'letter_convert', // 6
            
            'organization_access', // 7
            'organization_create', // 8
            'organization_edit', // 9
            'organization_delete', // 10

            'event_access', // 11
            'event_create', // 12
            'event_edit', // 13
            'event_delete', // 14
            
            'room_access', // 15
            'room_create', // 16
            'room_edit', // 17
            'room_delete', // 18
            
            'package_access', // 19
            'package_create', // 20
            'package_edit', // 21
            'package_delete', // 22

            'user_access', // 23
            'user_create', // 24
            'user_edit', // 25
            'user_delete', // 26

            'role_access', // 27
            'role_create', // 28
            'role_edit', // 29
            'role_delete', // 30

            'permission_access', // 31
            'permission_create', // 32
            'permission_edit', // 33
            'permission_delete', // 34
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
    }
}
