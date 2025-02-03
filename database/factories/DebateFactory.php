<?php

namespace Database\Factories;

use App\Models\Debate;
use App\Models\Statement;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Statement>
 */
class DebateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->domainWord(),
            'user_id' => User::inRandomOrder()->first()->id,
            'description' => $this->faker->realText(),
        ];
    }
}
