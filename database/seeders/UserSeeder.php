<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'username' => 'admin',
            'fullname' => 'Admin Ole',
            'email' => 'admin@ole.com',
            'phone' => '081234567890',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'username' => 'user',
            'fullname' => 'User Ole',
            'email' => 'user@ole.com',
            'phone' => '081234567891',
            'password' => Hash::make('password'),
        ]);
    }
}
