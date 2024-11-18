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
            'letter_export', // 6
            
            'organization_access', // 7
            'organization_create', // 8
            'organization_edit', // 9
            'organization_delete', // 10

            'pic_access', // 11
            'pic_create', // 12
            'pic_edit', // 13
            'pic_delete', // 14

            'event_access', // 15
            'event_create', // 16
            'event_edit', // 17
            'event_delete', // 18
            
            'room_access', // 19
            'room_create', // 20
            'room_edit', // 21
            'room_delete', // 22
            
            'package_access', // 23
            'package_create', // 24
            'package_edit', // 25
            'package_delete', // 26

            'user_access', // 27
            'user_create', // 28
            'user_edit', // 29
            'user_delete', // 30

            'role_access', // 31
            'role_create', // 32
            'role_edit', // 33
            'role_delete', // 34

            'permission_access', // 35
            'permission_create', // 36
            'permission_edit', // 37
            'permission_delete', // 38
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
    }
}
