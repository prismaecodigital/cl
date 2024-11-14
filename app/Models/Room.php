<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Room extends Model
{
    use HasFactory;
    protected $fillable = ['name'];

    public function hasLetter(): HasMany
    {
        return $this->hasMany(Letter::class, 'room_id', 'id');
    }
}
