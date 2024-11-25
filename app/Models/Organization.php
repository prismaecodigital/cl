<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Organization extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'address'];

    public function hasContact(): HasMany
    {
        return $this->hasMany(Contact::class, 'organization_id', 'id');
    }

    public function hasLetter(): HasMany
    {
        return $this->hasMany(Letter::class, 'organization_id', 'id');
    }
}
