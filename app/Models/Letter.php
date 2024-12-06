<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Letter extends Model
{
    use HasFactory;
    protected $fillable = ['code', 'created_by', 'organization_id', 'contact_id', 'event_id', 'hotel', 'room_id', 'check_in', 'check_out', 'attendance', 'payment', 'deposit', 'status'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($confirmationLetter) {
            // Generate the code before the record is saved
            $confirmationLetter->code = $confirmationLetter->generateCode();
        });
    }

    public function generateCode(): string
    {
        $prefix = 'CL';
        $location = 'OSHC';
        $monthRoman = $this->convertToRoman(now()->month);
        $year = now()->year;

        // Get the last letter for the current month
        $lastLetter = self::whereMonth('created_at', now()->month)
                        ->whereYear('created_at', now()->year)
                        ->latest('id')
                        ->first();

        // Extract and increment the ID
        $id = $lastLetter 
            ? (int)explode('/', $lastLetter->code)[0] + 1 
            : 1;

        return sprintf('%03d/%s/%s/%s/%d', $id, $prefix, $location, $monthRoman, $year);
    }

    private function convertToRoman($month): string
    {
        $map = [
            1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V',
            6 => 'VI', 7 => 'VII', 8 => 'VIII', 9 => 'IX', 10 => 'X',
            11 => 'XI', 12 => 'XII'
        ];

        return $map[$month] ?? '';
    }

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

    public function hasPackages(): HasManyThrough
    {
        return $this->hasManyThrough(NotePackage::class, Note::class);
    }
    
    public function hasFnb(): HasMany
    {
        return $this->hasMany(Fnb::class, 'letter_id', 'id');
    }

    public function calculateAmount(): float
    {
        return $this->hasNotes->flatMap(function ($note) {
            return $note->notePackage;
        })->sum(function ($package) {
            return $package->price * $package->qty; // Multiply price by qty
        });
    }
}
