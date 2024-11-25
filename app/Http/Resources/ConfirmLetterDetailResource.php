<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConfirmLetterDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'organization' => [
                'value' => $this->organization->id,
                'label' => $this->organization->name,
            ],
            'address' => $this->organization->address,
            'pic' => [
                'value' => $this->contact->id,
                'label' => $this->contact->name
            ],
            'phone' => $this->contact->phone,
            'check_in' => $this->check_in,
            'check_out' => $this->check_out,
            'event' => [
                'value' => $this->event->id,
                'label' => $this->event->name,
            ],
            'room' => [
                'value' => $this->room->id,
                'label' => $this->event->name,
            ],
            'attendance' => $this->attendance,
            'payment' => [
                'value' => $this->payment,
                'label' => ucfirst($this->payment),
            ],
            'sales' => $this->createdBy->fullname
        ];
    }
}
