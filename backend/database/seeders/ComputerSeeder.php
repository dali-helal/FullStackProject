<?php

namespace Database\Seeders;

use App\Models\Computer;
use Illuminate\Database\Seeder;

class ComputerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Computer::create([
            'name' => 'Example Computer',
            'description' => 'This is an example computer.',
            'price' => 999.99,
            'rating' => 4.5,
            'brand' => 'Example Brand',
            'procesor' => 'Intel Core i7',
            'memory' => '16GB',
            'storage' => '1TB SSD',
            'graphicsCard' => 'NVIDIA GeForce GTX 1660',
        ]);
    }
}
