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
        ];
    }

    private function maskNumber(string $phone): string
    {
        return substr_replace($phone, '×××××××××', 4);
    }
}
