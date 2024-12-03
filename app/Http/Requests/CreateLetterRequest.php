<?php

namespace App\Http\Requests;

use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class CreateLetterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Gate::allows('letter_create');
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
            'contact' => ['required', 'integer', 'exists:contacts,id'],
            'event' => ['required', 'integer', 'exists:events,id'],
            'room' => ['required', 'integer', 'exists:rooms,id'],
            'check_in' => ['required', 'date_format:Y-m-d'],
            'check_out' => ['required', 'date_format:Y-m-d', 'after_or_equal:check_in'],
            'attendance' => ['required', 'integer'],
            'payment' => ['required', 'string', 'in:cash,transfer'],
            'sales' => ['required', 'integer', 'exists:users,id'],

            // Notes
            'notes' => ['nullable', 'array'],
            'notes.*.start_date' => ['nullable', 'date_format:Y-m-d'],
            'notes.*.end_date' => ['nullable', 'date_format:Y-m-d'],

            // Notes Lists
            'notes.*.lists' => ['nullable', 'array'],
            'notes.*.lists.*.package' => ['nullable', 'integer', 'exists:packages,id'],
            'notes.*.lists.*.qty' => ['nullable', 'integer'],
            'notes.*.lists.*.price' => ['nullable', 'integer'],
            'notes.*.lists.*.note' => ['nullable', 'string'],

            // Schedule
            'schedules' => ['nullable', 'array'],
            'schedules.*.date' => ['nullable', 'date_format:Y-m-d'],
            'schedules.*.breakfast' => ['nullable', 'string'],
            'schedules.*.cb_morning' => ['nullable', 'string'],
            'schedules.*.lunch' => ['nullable', 'string'],
            'schedules.*.cb_evening' => ['nullable', 'string'],
            'schedules.*.dinner' => ['nullable', 'string'],
            'schedules.*.cb_night' => ['nullable', 'string'],
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $checkInDate = $this->input('check_in');
            $checkOutDate = $this->input('check_out');

            if ($checkInDate && $checkOutDate) {
                $checkIn = Carbon::createFromFormat('Y-m-d', $checkInDate);
                $checkOut = Carbon::createFromFormat('Y-m-d', $checkOutDate);

                foreach ($this->input('notes', []) as $key => $note) {
                    // Validate start_date when package or note is filled
                    if (isset($note['lists'])) {
                        foreach ($note['lists'] as $listKey => $list) {
                            if (!empty($list['package']) || !empty($list['note'])) {
                                if (empty($note['start_date'])) {
                                    $validator->errors()->add(
                                        "notes.$key.start_date",
                                        "The start date is required when a package or note is filled."
                                    );
                                }
                            }
                        }
                    }

                    // Validate start_date and end_date ranges
                    if (isset($note['start_date'])) {
                        $startDate = Carbon::createFromFormat('Y-m-d', $note['start_date']);
                        if ($startDate->lt($checkIn)) {
                            $validator->errors()->add(
                                "notes.$key.start_date",
                                "Each note start date must be on or after the check-in date."
                            );
                        }
                    }

                    if (isset($note['start_date']) && isset($note['end_date'])) {
                        $startDate = Carbon::createFromFormat('Y-m-d', $note['start_date']);
                        $endDate = Carbon::createFromFormat('Y-m-d', $note['end_date']);

                        if ($endDate->lt($startDate)) {
                            $validator->errors()->add(
                                "notes.$key.end_date",
                                "Each note end date must be on or after the start date."
                            );
                        }

                        if ($endDate->gt($checkOut)) {
                            $validator->errors()->add(
                                "notes.$key.end_date",
                                "Each note end date must be on or before the check-out date."
                            );
                        }
                    }
                }

                foreach ($this->input('schedules', []) as $key => $schedule) {
                    if (isset($schedule['date'])) {
                        $scheduleDate = Carbon::createFromFormat('Y-m-d', $schedule['date']);
                        if ($scheduleDate->lt($checkIn)) {
                            $validator->errors()->add(
                                "schedules.$key.date",
                                "Each schedule date must be on or after the check-in date."
                            );
                        }
                        if ($scheduleDate->gt($checkOut)) {
                            $validator->errors()->add(
                                "schedules.$key.date",
                                "Each schedule date must be on or before the check-out date."
                            );
                        }
                    }
                }
            }
        });
    }


    /**
     * Get the custom messages for validation errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'notes.*.start_date.after_or_equal' => 'Each note start date must be after or equal to the check-in.',
            'notes.*.end_date.before_or_equal' => 'Each note end date must be before or equal to the check-out.',
            'notes.*.lists.*.package.exists' => 'The selected package does not exist.',
            'notes.*.lists.*.price.integer' => 'Each price must be an integer.',
            'schedules.*.date.after_or_equal' => 'Each schedule date must be after or equal to the check-in.',
            'schedules.*.date.before_or_equal' => 'Each schedule date must be before or equal to the check-out.',
        ];
    }
}
