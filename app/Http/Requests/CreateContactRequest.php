<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class CreateContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Gate::allows('pic_create');
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
            'phone' => ['required', 'string', 'max:16'],
            'fax' => ['required', 'string', 'max:25'],
            'email' => ['required', 'string', 'max:50']
        ];
    }
}
