<?php

namespace Database\Seeders;

use App\Models\Bookmark;
use Database\Factories\BookmarkFactory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {
//         \App\Models\User::factory(10)->create();
        \App\Models\User::factory()->create([
            'name' => 'Robert Junior',
            'email' => 'robert@gmail.com',
            'password' => \bcrypt('robert'),
        ]);

        Bookmark::factory(10)->create([
            'is_active' => 1,
        ]);
    }
}
