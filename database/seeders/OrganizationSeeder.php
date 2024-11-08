<?php

namespace Database\Seeders;

use App\Models\Organization;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrganizationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Organization::create([
            'name' => 'PT Toyota Astra Financial Service',
            'address' => 'Alamat PT Toyota Astra Financial Service'
        ]);

        Organization::create([
            'name' => 'Organization 2',
            'address' => 'Alamat Organization 2'
        ]);
    }
}
