<?php

namespace App\Services;

use App\Models\Letter;

class LetterService
{
    public function createLetter(array $inputValidated)
    {
        $letterObject = $this->createLetterObject($inputValidated);
        $letter = Letter::create($letterObject);

        $this->createNote($letter, $validated['notes'] ?? []);
        $this->createSchedules($letter, $validated['schedules'] ?? []);
    }

    private function createNote(Letter $letter, array $notes)
    {
        foreach($notes as $note){
            if(isset($note['start_date'])) {
                $notes = $letter->hasNotes()->create([
                    'start_date' => $note['start_date'],
                    'end_date' => $note['end_date'],
                ]);
            }

            foreach($note['lists'] as $package){
                if(isset($package['package']) || isset($package['note'])){
                    $packageObject = $this->createNotePackageObject($package);
                    $notes->notePackage()->create($packageObject);
                }
            }
        }
    }
    
    private function createSchedules(Letter $letter, array $schedules)
    {
        foreach($schedules as $schedule){
            if(isset($schedule['date'])){
                $letter->hasFnb()->create($schedule);
            }
        }
    }

    public function updateLetter(Letter $letter, array $inputValidated)
    {
        $letterObject = $this->createLetterObject($inputValidated);
        $letter->fill($letterObject);
        $letter->save();

        $this->syncNote($letter, $validated['notes'] ?? []);
        $this->syncSchedules($letter, $validated['schedules'] ?? []);
    }
    
    private function syncNote(Letter $letter, array $notes)
    {
        // Get the current note IDs
        $existingNoteIds = $letter->hasNotes()->pluck('id')->toArray();
        $newNoteIds = collect($notes)->pluck('id')->filter()->toArray(); // Only keep non-null IDs

        // Delete notes that are not in the update request
        $notesToDelete = array_diff($existingNoteIds, $newNoteIds);
        $letter->hasNotes()->whereIn('id', $notesToDelete)->delete();

        foreach($notes as $note){
            if(isset($note['start_date'])) {
                $notes = $letter->hasNotes()->updateOrCreate([
                    'start_date' => $note['start_date'],
                    'end_date' => $note['end_date'],
                ]);

                // Handle note package
                $notePackage = $note['lists'] ?? [];

                // Get the current package IDs for the note
                $existingPackageIds = $notes->notePackage()->pluck('id')->toArray();
                $newPackageIds = collect($notePackage)->pluck('id')->filter()->toArray();

                // Delete subsections that are not in the update request
                $packageToDelete = array_diff($existingPackageIds, $newPackageIds);
                $notes->notePackage()->whereIn('id', $packageToDelete)->delete();

                foreach($notePackage as $package){
                    if(isset($package['package']) || isset($package['note'])){
                        $packageObject = $this->createNotePackageObject($package);
                        $notes->notePackage()->updateOrCreate($packageObject);
                    }
                }
            }
        }
    }
    
    private function syncSchedules(Letter $letter, array $schedules)
    {
        // Get the current note IDs
        $existingScheduleIds = $letter->hasFnb()->pluck('id')->toArray();
        $newScheduleIds = collect($schedules)->pluck('id')->filter()->toArray(); // Only keep non-null IDs

        // Delete notes that are not in the update request
        $schedulesToDelete = array_diff($existingScheduleIds, $newScheduleIds);
        $letter->hasFnb()->whereIn('id', $schedulesToDelete)->delete();

        foreach($schedules as $schedule){
            if(isset($schedule['date'])){
                $letter->hasFnb()->updateOrCreate($schedule);
            }
        }
    }

    private function createLetterObject(array $input): array
    {
        return [
            'created_by' => $input['sales'],
            'organization_id' => $input['organization'],
            'contact_id' => $input['contact'],
            'check_in' => convertToJakartaTime($input['check_in']),
            'check_out' => convertToJakartaTime($input['check_out']),
            'event_id' => $input['event'],
            'hotel' => $input['hotel'],
            'room_id' => $input['room'],
            'attendance' => $input['attendance'],
            'payment' => $input['payment'],
            'deposit' => $input['deposit'],
        ];
    }

    private function createNotePackageObject(array $input): array
    {
        return [
            'package_id' => $input['package'],
            'qty' => $input['qty'],
            'price' => $input['price'],
            'note' => $input['note'],
        ];
    }
}