<?php

namespace Database\Seeders;

use App\Models\Debate;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();

        Debate::factory()->create([
            'user_id' => User::factory()->create([
                'name' => 'Deisi',
                'email' => 'deisi.bonilla@gmail.com',
            ])->id
        ]);

        $this->call([
            StatementSeeder::class
        ]);
    }
}
