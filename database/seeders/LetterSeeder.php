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
            'created_by' => 3,
            'organization_id' => 1,
            'contact_id' => 1,
            'event_id' => 1,
            'room_id' => 1,
            'check_in' => '2024-02-04',
            'check_out' => '2024-02-06',
            'attendance' => 55,
            'payment' => 'transfer',
            'deposit' => 5000000,
            'hotel' => 'Ole Suites Hotel, RUKUN',
            'status' => 'progress',
        ]);
    }
}
