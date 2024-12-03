<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contact::create([
            'organization_id' => 1,
            'name' => 'Bapak Lyonardo Edipurtta',
            'phone' => '081234567890',
            'fax' => '-',
            'email' => '-'
        ]);

        Contact::create([
            'organization_id' => 1,
            'name' => 'Contact 2',
            'phone' => '0987654322',
            'fax' => '-',
            'email' => 'contact2@email.com'
        ]);

        Contact::create([
            'organization_id' => 2,
            'name' => 'Contact 3',
            'phone' => '0987654323',
            'fax' => '-',
            'email' => 'contact3@email.com'
        ]);
    }
}
