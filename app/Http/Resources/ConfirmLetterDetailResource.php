<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConfirmLetterDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'organization' => $this->organization_id,
            'organizationSelected' => [
                'value' => $this->organization->id,
                'label' => $this->organization->name,
            ],
            'address' => $this->organization->address,
            'contact' => $this->contact_id,
            'contactSelected' => [
                'value' => $this->contact->id,
                'label' => $this->contact->name
            ],
            'phone' => $this->contact->phone,
            'check_in' => Carbon::parse($this->check_in)->format('Y-m-d'),
            'check_out' => Carbon::parse($this->check_out)->format('Y-m-d'),
            'event' => $this->event_id,
            'eventSelected' => [
                'value' => $this->event->id,
                'label' => $this->event->name,
            ],
            'hotel' => $this->hotel,
            'hotelSelected' => array_map(
                fn($hotel) => ['value' => $hotel, 'label' => $hotel], 
                explode(', ', $this->hotel) ?: [$this->hotel]
            ),
            'room' => $this->room_id,
            'roomSelected' => [
                'value' => $this->room->id,
                'label' => $this->room->name,
            ],
            'attendance' => $this->attendance,
            'payment' => $this->payment,
            'paymentSelected' => [
                'value' => $this->payment,
                'label' => ucfirst($this->payment),
            ],
            'deposit' => $this->deposit,
            'depositValue' => number_format($this->deposit, 0, '', '.'),
            'sales' => $this->created_by,
            'notes' => count($this->hasNotes) > 0 ? 
                $this->hasNotes->map(function ($note){
                    return [
                        'letter_id' => $note->letter_id,
                        'start_date' => isset($note['start_date']) ? Carbon::parse($note['start_date'])->format('Y-m-d') : null,
                        'end_date' => isset($note['end_date']) ? Carbon::parse($note['end_date'])->format('Y-m-d') : null,
                        'lists' => count($note->notePackage) > 0 ? 
                            $note->notePackage->map(function ($item){
                                $hasPackage = $item->package_id;
                                return [
                                    'note_id' => $item->note_id,
                                    'package' => $item->package_id,
                                    'packageSelected' => $hasPackage ? [
                                        'value' => $item->package->id,
                                        'label' => $item->package->name,
                                    ] : [],
                                    'uom' => $hasPackage ? $item->package->uom : '',
                                    'qty' => $item->qty,
                                    'price' => $item->price,
                                    'priceValue' => number_format($item->price, 0, '', '.'),
                                    'note' => $item->note,
                                ];
                            }) : [$this->notePackageDefault()],
                    ];
                }) : [$this->noteObjectDefault()],
            'schedules' => count($this->hasFnb) > 0 ? 
                $this->hasFnb->map(function ($schedule){
                    return [
                        'letter_id' => $schedule->letter_id,
                        'date' => isset($schedule['date']) ? Carbon::parse($schedule['date'])->format('Y-m-d') : null,
                        'breakfast' => $schedule->breakfast,
                        'cb_morning' => $schedule->cb_morning,
                        'lunch' => $schedule->lunch,
                        'cb_evening' => $schedule->cb_evening,
                        'dinner' => $schedule->dinner,
                        'cb_night' => $schedule->cb_night,
                    ];
                }) : [$this->fnbObjectDefault()],
        ];
    }

    private function noteObjectDefault(): array
    {
        return [
            'letter_id' => '',
            'start_date' => '',
            'end_date' => '',
            'lists' => [[
              'package' => '',
              'packageSelected' => '',
              'uom' => '',
              'qty' => '',
              'price' => '',
              'priceValue' => '',
              'note' => '',
            ]]
        ];
    }

    private function notePackageDefault(): array
    {
        return [
            'note_id' => '',
            'package' => '',
            'packageSelected' => '',
            'uom' => '',
            'qty' => '',
            'price' => '',
            'priceValue' => '',
            'note' => '',
        ];
    }

    private function fnbObjectDefault(): array
    {
        return [
            'letter_id' => '',
            'date' => '',
            'breakfast' => '',
            'cb_morning' => '',
            'lunch' => '',
            'cb_evening' => '',
            'dinner' => '',
            'cb_night' => '',
        ];
    }
}
