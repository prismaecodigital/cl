@php
    $details = [
        'Nama Organisasi' => $letter['organization'],
        'Alamat' => $letter['address'],
        'Nama Kontak' => $letter['pic'],
        'Telepon' => $letter['pic_phone'],
        'Fax' => $letter['pic_fax'],
        'Email' => $letter['pic_email'],
        'Check in' => $letter['check_in'],
        'Check out' => $letter['check_out'],
        'Tipe Acara' => $letter['event'],
        'Ruangan' => $letter['room'],
        'Jumlah Peserta' => $letter['attendance'],
        'Metode Pembayaran' => $letter['payment'],
    ];
@endphp

<table class="info-table">
    @foreach ($details as $key => $value)
        <tr>
            <td>{{ $key }}</td>
            <td>
                @if ($key == ' Nama Organisasi')
                    <b>{{ $value }}</b>
                @else
                    {{ $value }}                    
                @endif
            </td>
        </tr>
    @endforeach
</table>
