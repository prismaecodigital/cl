<?php

use App\Models\Organization;
use Carbon\Carbon;

if (!function_exists('convertToJakartaTime')) {
    function convertToJakartaTime(string $datetime)
    {
        return Carbon::parse($datetime)
                     ->setTimezone('Asia/Jakarta')
                     ->format('Y-m-d H:i:s');
    }
}

if (!function_exists('organizationSelectOptions')) {
    function organizationSelectOptions()
    {
        return Organization::all(['id', 'name'])->map(function ($data) {
            return [
                'value' => $data->id,
                'label' => $data->name,
            ];
        })->toArray();
    }
}