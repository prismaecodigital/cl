<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Note extends Model
{
    use HasFactory;
    protected $fillable = ['letter_id', 'date'];

    public function letter(): BelongsTo
    {
        return $this->belongsTo(Letter::class, 'letter_id', 'id');
    }

    public function notePackage(): HasMany
    {
        return $this->hasMany(NotePackage::class, 'note_id', 'id');
    }
}
