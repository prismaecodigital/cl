<h2 class="text--sub-title">Catatan</h2>

<table class="note-table">
    <thead>
        <tr>
            <th>Tanggal</th>
            <th>Paket</th>
            <th>Harga</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($notes as $note)
            <tr>
                <td rowspan="{{ count($note['packages']) }}" class="text--center">
                    <b>{{ $note['date'] }}</b>
                </td>
                @foreach ($note['packages'] as $index => $package)
                    @if ($index > 0)
                        <tr>
                    @endif
                        <td>
                            @if ($package['name'])
                                <strong>{{ $package['name'] }}</strong><br>
                                Rp{{ addDotsCurrency($package['price']) }} <span class="space">x</span> {{ $package['qty'] }} {{ $package['unit'] }} <span class="space">x</span> 1 Night<br>    
                            @endif
                            
                            @if ($package['note'])
                                {!! nl2br(e($package['note'])) !!}   
                            @endif
                        </td>
                        <td class="text--center">
                            @if ($package['name'])
                                Rp{{ addDotsCurrency($package['total_price']) }}
                            @endif
                        </td>
                    </tr>
                @endforeach
            </tr>
        @endforeach

        @if ($amount)
            <tr>
                <td colspan="2" class="text--center">
                    <b>TOTAL</b>
                </td>
                <td class="text--center">
                    <b>{{ $amount }}</b>
                </td>
            </tr>    
        @endif
    </tbody>
</table>
