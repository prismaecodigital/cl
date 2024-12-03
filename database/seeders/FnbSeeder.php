<?php

namespace Database\Seeders;

use App\Models\Fnb;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FnbSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Fnb::create([
            'letter_id' => 1,
            'date' => '2024-02-05',
            'breakfast' => '34+21',
            'cb_morning' => '55',
            'lunch' => '55',
            'cb_evening' => '55',
            'dinner' => '55',
            'cb_night' => '',
        ]);

        Fnb::create([
            'letter_id' => 1,
            'date' => '2024-02-06',
            'breakfast' => '55+2',
            'cb_morning' => '',
            'lunch' => '',
            'cb_evening' => '',
            'dinner' => '',
            'cb_night' => '',
        ]);
    }
}
