<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class UpdateContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Gate::allows('pic_edit');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $id = $this->route('contact');

        return [
            'organization' => ['required', 'integer', 'exists:organizations,id'],
            'name' => ['required', 'string', 'max:60'],
            'phone' => ['required', 'string', 'max:16', Rule::unique('contacts')->ignore($id)],
            'fax' => ['required', 'string', 'max:25', Rule::unique('contacts')->ignore($id)],
            'email' => ['required', 'email', 'max:50', Rule::unique('contacts')->ignore($id)]
        ];
    }
}
