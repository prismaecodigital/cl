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
           'start_date' => '2024-02-04',
           'end_date' => '2024-02-05',
        ]);

        Note::create([
            'letter_id' => 1,
            'start_date' => '2024-02-05',
        ]);

        Note::create([
            'letter_id' => 1,
            'start_date' => '2024-02-05',
            'end_date' => '2024-02-06',
        ]);

        Note::create([
            'letter_id' => 1,
            'start_date' => '2024-02-06',
        ]);

        Note::create([
            'letter_id' => 1,
            'start_date' => '2024-02-05',
        ]);
    }
}
