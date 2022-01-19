<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(string[] $array)
 * @method static find(mixed $id)
 * @property string $user_id
 */
class Bookmark extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
}
