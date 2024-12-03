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
            'name' => 'PT Toyota Astra Financial Services',
            'address' => 'The Tower Building 9th fl, Entrance J Jl. Gatot Subroto No. 27, RT.2/RW.4, Karet Semanggi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, 12930'
        ]);

        Organization::create([
            'name' => 'Organization 2',
            'address' => 'Alamat Organization 2'
        ]);
    }
}
