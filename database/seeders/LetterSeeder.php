<?php

namespace Database\Seeders;

use App\Models\Letter;
use Illuminate\Database\Seeder;

class LetterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Letter::create([
            'created_by' => 2,
            'organization_id' => 1,
            'contact_id' => 2,
            'event_id' => 1,
            'room_id' => 1,
            'check_in' => '2024-12-01',
            'check_out' => '2024-12-03',
            'attendance' => 45,
            'payment' => 'transfer'
        ]);
    }
}
