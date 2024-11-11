<?php

namespace Database\Seeders;

use App\Models\NotePackage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NotePackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        NotePackage::create([
            'note_id' => 1,
            'package_id' => 1,
            'qty' => 7,
            'price' => 600000,
            'note' => ''
        ]);

        NotePackage::create([
            'note_id' => 2,
            'package_id' => 5,
            'qty' => 5,
            'price' => 650000,
            'note' => 'asd'
        ]);
    }
}
