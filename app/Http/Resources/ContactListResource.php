<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactListResource extends JsonResource
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
            'organization' => $this->organization->name,
            'name' => $this->name,
            'phone' => $this->maskNumber($this->phone),
            'canDelete' => $this->hasLetter->isEmpty(),
        ];
    }

    private function maskNumber(string $phone): string
    {
        if($phone === '-') {
            return $phone;
        }

        return substr_replace($phone, '××××××××', 4);
    }
}
