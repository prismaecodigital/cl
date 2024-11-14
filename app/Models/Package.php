<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Package extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'uom'];

    public function hasNotePackage(): HasMany
    {
        return $this->hasMany(NotePackage::class, 'package_id', 'id');
    }
}
