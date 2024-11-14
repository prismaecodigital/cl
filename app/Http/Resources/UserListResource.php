<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserListResource extends JsonResource
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
            'username' => $this->username,
            'fullname' => $this->fullname,
            'role' => $this->collectRole(),
            'email' => $this->email,
            'phone' => $this->phone,
            'canDelete' => $this->hasLetter->isEmpty(),
        ];
    }

    private function collectRole()
    {
        return $this->hasRoles->pluck('name')->toArray();
    }
}
