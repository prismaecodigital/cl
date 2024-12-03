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
            ['name' => 'Room Breakfast', 'uom' => 'room'], // 1
            ['name' => 'Cluster', 'uom' => 'cluster'],// 2
            ['name' => 'Additional Breakfast', 'uom' => 'pax'], // 3
            ['name' => 'Fullboard Meeting Package Twinshare', 'uom' => 'pax'], // 4
            ['name' => 'Live Music', 'uom' => 'pax'], // 5
        ];

        foreach ($packages as $package) {
            Package::create([
                'name' => $package['name'],
                'uom' => $package['uom'],
            ]);
        }
    }
}
