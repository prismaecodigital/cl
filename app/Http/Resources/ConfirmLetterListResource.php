<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConfirmLetterListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'check_in' => $this->check_in,
            'organization' => $this->organization->name,
            'pic' => $this->contact->name,
            'event' => $this->event->name,
            'sales' => $this->createdBy->fullname,
            'amount' => $this->calculateAmount(),
        ];
    }
}
