<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Mohamed ali',
            'email' => 'dalihelal6@gmail.com',
            'role' => 'Super Admin',
            'password' => bcrypt('test1234'),
            "user_tel"=>"+21699123456",
        ]);
    }
}
