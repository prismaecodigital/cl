<section>
    <div class='text--center'>
        <h1 class="text--heading">CONFIRMATION LETTER</h1>
        <p>No: 076/CL/DARMAWANPARK/II/2024</p>
    </div>

    <p>
        Dengan hormat, <br>
        Bersama ini kami tawarkan jasa kepada:
    </p>

    @include('pdf.table.information', compact('letter'))
    @include('pdf.table.notes', compact('letter'))
    @include('pdf.table.schedules', ['schedules' => $letter['schedules']])
</section>