<?php

namespace Database\Seeders;

use App\Models\Package;
use Illuminate\Database\Seeder;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $packages = [
            ['name' => 'Room Breakfast', 'uom' => 'room'],
            ['name' => 'Cluster', 'uom' => 'cluster'],
            ['name' => 'Live Music', 'uom' => 'pax'],
            ['name' => 'Additional Breakfast', 'uom' => 'pax'],
        ];

        foreach ($packages as $package) {
            Package::create([
                'name' => $package['name'],
                'uom' => $package['uom'],
            ]);
        }
    }
}
