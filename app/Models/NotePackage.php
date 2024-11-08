<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class NotePackage extends Model
{
    use HasFactory;
    protected $fillable = ['note_id', 'package_id', 'qty', 'price', 'note'];

    public function note(): BelongsTo
    {
        return $this->belongsTo(Note::class, 'note_id', 'id');
    }

    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class, 'package_id', 'id');
    }
}
