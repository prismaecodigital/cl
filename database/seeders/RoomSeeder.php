<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $rooms = [
            'Ole Cottage',
            'Excecutive Room',
            'Panorama Lounge',
            'Conference Hall'
        ];

        foreach ($rooms as $room) {
            Room::create(['name' => $room]);
        }
    }
}
