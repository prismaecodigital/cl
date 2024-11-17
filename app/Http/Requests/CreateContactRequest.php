<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'organization' => ['required', 'integer', 'exists:organizations,id'],
            'name' => ['required', 'string', 'max:60'],
            'phone' => ['required', 'string', 'max:16', 'required:contacts,phone'],
            'fax' => ['required', 'string', 'max:25', 'required:contacts,fax'],
            'email' => ['required', 'email', 'max:50', 'required:contacts,email']
        ];
    }
}
