<?php

namespace Database\Seeders;

use App\Models\Note;
use Illuminate\Database\Seeder;

class NoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Note::create([
           'letter_id' => 1,
           'start_date' => '2024-12-01',
        ]);

        Note::create([
            'letter_id' => 1,
            'start_date' => '2024-12-02',
            'end_date' => '2024-12-03',
         ]);
    }
}
