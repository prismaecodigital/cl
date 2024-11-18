<?php

use App\Models\Organization;
use App\Models\Permission;
use App\Models\Role;
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

if (!function_exists('permissionSelectOptions')) {
    function permissionSelectOptions()
    {
        return Permission::all(['id', 'name'])->map(function ($data) {
            return [
                'value' => $data->id,
                'label' => $data->name,
            ];
        })->toArray();
    }
}

if (!function_exists('roleSelectOptions')) {
    function roleSelectOptions()
    {
        return Role::all(['id', 'name'])->map(function ($data) {
            return [
                'value' => $data->id,
                'label' => $data->name,
            ];
        })->toArray();
    }
}