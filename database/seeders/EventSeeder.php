<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $events = [
            'Fullboard Meeting Package',
            'All-Inclusive Conference Bundle',
            'Executive Retreat Package',
        ];

        foreach ($events as $event) {
            Event::create(['name' => $event]);
        }
    }
}
