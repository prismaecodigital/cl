<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Letter extends Model
{
    use HasFactory;
    protected $fillable = ['created_by', 'organization_id', 'contact_id', 'event_id', 'room_id', 'check_in', 'check_out', 'attendance', 'payment'];

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }

    public function organization(): BelongsTo
    {
        return $this->belongsTo(Organization::class, 'organization_id', 'id');
    }

    public function contact(): BelongsTo
    {
        return $this->belongsTo(Contact::class, 'contact_id', 'id');
    }
    
    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class, 'event_id', 'id');
    }
    
    public function room(): BelongsTo
    {
        return $this->belongsTo(Room::class, 'room_id', 'id');
    }

    public function hasNotes(): HasMany
    {
        return $this->hasMany(Note::class, 'letter_id', 'id');
    }
    
    public function hasFnb(): HasMany
    {
        return $this->hasMany(Fnb::class, 'letter_id', 'id');
    }
}
