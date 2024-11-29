<h2>Jadwal Food and Bevarage</h2>

<table border="1" style="border-collapse: collapse; text-align: center; width: 100%;">
    @php
        $columns = ['date' => 'Day', 'breakfast' => 'Breakfast', 'cb_morning' => 'Coffee Break Pagi', 'lunch' => 'Lunch', 'cb_evening' => 'Coffee Break Sore', 'dinner' => 'Dinner', 'cb_night' => 'Coffee Break Malam'];
    @endphp
    <thead>
        <tr>
            @foreach ($columns as $key => $label)
                <th>{{ $label }}</th>
            @endforeach
        </tr>
    </thead>
    <tbody>
        @foreach ($schedules as $schedule)
            <tr>
                @foreach ($columns as $key => $label)
                    <td>
                        {{ $label }}
                    </td>
                @endforeach
            </tr>
        @endforeach
    </tbody>
</table>
