<h2 class="text--sub-title">Catatan</h2>
@php
    print_r($notes)
@endphp

<table class="note-table">
    <thead>
        <tr>
            <th class="col-date">Tanggal</th>
            <th class="col-package">Paket</th>
            <th class="col-price">Harga</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($notes as $note)
            <tr>
                <td rowspan="{{ count($note['packages']) + 1 }}" class="col-date"> {{ $note['date'] }} </td>
            </tr>
            @foreach ($note['packages'] as $package)
                <tr>
                    <td>
                        <span>{{ $package['name'] }}</span>
                    </td>
                </tr>
            @endforeach
        @endforeach
    </tbody>
</table>