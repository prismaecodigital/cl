<section>
    <div class='text--center'>
        <h1 class="text--heading">CONFIRMATION LETTER</h1>
        <p>No: {{ $letter['code'] }}</p>
    </div>

    <p>
        Dengan hormat, <br>
        Bersama ini kami tawarkan jasa kepada:
    </p>

    @include('pdf.table.information', compact('letter'))

    @if (!empty($letter['notes']))
        @include('pdf.table.notes', ['notes' => $letter['notes']])
    @endif

    @if (!empty($letter['schedules']))
        @include('pdf.table.schedules', ['schedules' => $letter['schedules']])
    @endif
</section>