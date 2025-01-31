<?php

namespace Database\Factories;

use App\Models\Statement;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Statement>
 */
class StatementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'content' => $this->faker->text(),
            'user_id' => User::inRandomOrder()->first()->id,
            'parent_id' => Statement::inRandomOrder()->first()?->id,
            'anonymous' => $this->faker->boolean(20),
            'likes' => $this->faker->numberBetween(0, 50),
        ];
    }
}
