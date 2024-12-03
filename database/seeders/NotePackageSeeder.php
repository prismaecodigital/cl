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
            'note' => 'Include breakfast for 2 pax/room'
        ]);
        NotePackage::create([
            'note_id' => 1,
            'package_id' => 2,
            'qty' => 5,
            'price' => 1200000,
            'note' => 'Include breakfast for 4 pax/cluster'
        ]);

        NotePackage::create([
            'note_id' => 2,
            'package_id' => 3,
            'qty' => 21,
            'price' => 120000,
        ]);

        NotePackage::create([
            'note_id' => 3,
            'package_id' => 4,
            'qty' => 55,
            'price' => 650000,
            'note' => '1 room isi 2 pax'
        ]);

        NotePackage::create([
            'note_id' => 3,
            'note' => "Paket sudah termasuk:\n- 3x Makan & 2x Coffee Break\n- Meeting room\n- Notepad, screen, infocus, mic wireless, masker, air mineral",
        ]);
        
        NotePackage::create([
            'note_id' => 4,
            'package_id' => 3,
            'qty' => 2,
            'price' => 120000,
        ]);

        NotePackage::create([
            'note_id' => 5,
            'package_id' => 5,
            'qty' => 1,
            'price' => 2500000,
        ]);

    }
}
