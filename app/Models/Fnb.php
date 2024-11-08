<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Fnb extends Model
{
    use HasFactory;
    protected $fillable = ['breakfast', 'cb_morning', 'lunch', 'cb_evening', 'dinner', 'cb_night'];

    public function confirmLetter(): BelongsTo
    {
        return $this->belongsTo(Letter::class, 'letter_id', 'id');
    }
}
