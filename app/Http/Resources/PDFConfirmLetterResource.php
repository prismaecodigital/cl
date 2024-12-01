<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PDFConfirmLetterResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'organization' => $this->organization->name,
            'address' => $this->organization->address,
            'pic' => $this->contact->name,
            'phone' => $this->contact->phone,
            'fax' => $this->contact->fax,
            'email' => $this->contact->email,
            'check_in' => $this->check_in,
            'check_out' => $this->check_out,
            'event' => $this->event->name,
            'room' => $this->room->name,
            'attendance' => $this->attendance,
            'payment' => ucfirst($this->payment),
            'sales' => $this->createdBy->fullname,

            'schedules' => $this->hasFnb ? 
            $this->hasFnb->map(function ($schedule){
                return [
                    'letter_id' => $schedule->letter_id,
                    'date' => isset($schedule['date']) ? Carbon::parse($schedule['date'])->format('d m Y') : null,
                    'breakfast' => $schedule->breakfast,
                    'cb_morning' => $schedule->cb_morning,
                    'lunch' => $schedule->lunch,
                    'cb_evening' => $schedule->cb_evening,
                    'dinner' => $schedule->dinner,
                    'cb_night' => $schedule->cb_night,
                ];
            }) : [],
        ];  
    }
}
