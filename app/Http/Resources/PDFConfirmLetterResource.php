<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PDFConfirmLetterResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        Carbon::setLocale('id');

        return [
            'code' => $this->code,
            'organization' => $this->organization->name,
            'address' => $this->organization->address,
            'pic' => $this->contact->name,
            'phone' => $this->contact->phone,
            'fax' => $this->contact->fax,
            'email' => $this->contact->email,
            'check_in' => Carbon::parse($this->check_in)->translatedFormat('d F Y'),
            'check_out' => Carbon::parse($this->check_out)->translatedFormat('d F Y'),
            'event' => $this->event->name,
            'room' => $this->room->name,
            'attendance' => $this->attendance,
            'payment' => ucfirst($this->payment),
            'sales' => $this->createdBy->fullname,
            'phone' => $this->createdBy->phone,
            'emai' => $this->createdBy->email,
            'notes' => $this->hasNotes ? 
                $this->hasNotes->map(function ($note) {
                    return [
                        'date' => $this->generateDateNote($note['start_date'], $note['end_date']),
                        'packages' => $note->notePackage ? 
                            $note->notePackage->map(function ($item) {
                                return [
                                    'name' => $item->package_id ? $item->package->name : '',
                                    'price' => $item->price,
                                    'qty' => $item->qty,
                                    'unit' => $item->package_id ? $item->package->uom : '',
                                    'note' => $item->note,
                                    'total_price' => intval($item->qty) * intval($item->price)
                                ];
                            }) : [],
                    ];
                }) : [],
            'schedules' => $this->hasFnb ? 
            $this->hasFnb->map(function ($schedule){
                return [
                    'letter_id' => $schedule->letter_id,
                    'date' => isset($schedule['date']) ? Carbon::parse($schedule['date'])->format('d M Y') : null,
                    'breakfast' => $schedule->breakfast,
                    'cb_morning' => $schedule->cb_morning,
                    'lunch' => $schedule->lunch,
                    'cb_evening' => $schedule->cb_evening,
                    'dinner' => $schedule->dinner,
                    'cb_night' => $schedule->cb_night,
                ];
            }) : [],
            'total_amount' => $this->calculateAmount() ? 'Rp'.addDotsCurrency($this->calculateAmount()) : '',
            'current_date' => Carbon::now()->translatedFormat('d F Y'),
        ];  
    }

    private function generateDateNote($start_date, $end_date): string
    {
        $startDate = isset($start_date) ? Carbon::parse($start_date)->format('j M y') : null;
        $endDate = isset($end_date) ? Carbon::parse($end_date)->format('j M y') : null;

        if ($startDate && $endDate) {
            return "$startDate - $endDate";
        } elseif ($startDate) {
            return $startDate;
        } elseif ($endDate) {
            return $endDate;
        }

        return "-";
    }
}
