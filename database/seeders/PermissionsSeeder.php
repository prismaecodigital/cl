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
            'letter_show', // 3
            'letter_create', // 4
            'letter_edit', // 5
            'letter_delete', // 6
            'letter_export', // 7
            
            'organization_access', // 8
            'organization_create', // 9
            'organization_edit', // 10
            'organization_delete', // 11

            'pic_access', // 12
            'pic_create', // 13
            'pic_edit', // 14
            'pic_delete', // 15

            'event_access', // 16
            'event_create', // 17
            'event_edit', // 18
            'event_delete', // 19
            
            'room_access', // 20
            'room_create', // 21
            'room_edit', // 22
            'room_delete', // 23
            
            'package_access', // 24
            'package_create', // 25
            'package_edit', // 26
            'package_delete', // 27

            'user_access', // 28
            'user_create', // 29
            'user_edit', // 30
            'user_delete', // 31

            'role_access', // 32
            'role_create', // 33
            'role_edit', // 34
            'role_delete', // 35

            'permission_access', // 36
            'permission_create', // 37
            'permission_edit', // 38
            'permission_delete', // 39
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
    }
}
