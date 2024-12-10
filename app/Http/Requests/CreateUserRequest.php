<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Gate::allows('user_create');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'username' => ['required', 'string', 'max:25', 'unique:users,username'],
            'fullname' => ['required', 'string', 'max:60'],
            'email' => ['required', 'string', 'max:50', 'unique:users,email'],
            'phone' => ['required', 'string', 'max:16', 'unique:users,phone'],
            'password' => ['required', 'string'],
            'role' => ['required', 'array', 'min:1'],
            'role.*' => ['integer', 'exists:roles,id'],
            'sign' => ['nullable', 'image', 'mimes:jpeg,png,jpg', 'max:2048'],
        ];
    }
}
