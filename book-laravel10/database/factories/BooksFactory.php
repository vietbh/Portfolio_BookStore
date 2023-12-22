<?php

namespace Database\Factories;

use App\Models\Books;
use App\Models\Categories;
use Illuminate\Database\Eloquent\Factories\Factory;
use Nette\Utils\Random;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Books>
 */
class BooksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categoryIds = Categories::pluck('category_id')->toArray();
        $categoryId = fake()->randomElement($categoryIds);
    
        return [
            'book_title' => fake()->sentence(7, true),
            'book_author' => fake()->name(),
            'book_description' => fake()->paragraph(),
            'book_price' => fake()->numberBetween(100, 1000),
            'category_id' => $categoryId,
            'book_image' => fake()->imageUrl(450, 450),
        ];
    
    }
}
