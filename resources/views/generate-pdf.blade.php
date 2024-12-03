<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Confirmation Letter</title>
    {{-- <link rel="stylesheet" href="{{ $css }}"> --}}
    <style>@font-face{font-family:Figtree;font-weight:400;src:url('https://fonts.bunny.net/css?family=figtree:400&display=swap') format('woff2')}@font-face{font-family:Figtree;font-weight:500;src:url('https://fonts.bunny.net/css?family=figtree:500&display=swap') format('woff2')}@font-face{font-family:Figtree;font-weight:600;src:url('https://fonts.bunny.net/css?family=figtree:600&display=swap') format('woff2')}</style>
    <style>
        .header-logo,.text--center{text-align:center}.footnote-table,.info-table,.note-table,.schedule-table,.sign-table{width:100%;border-collapse:collapse}*,::after,::before{box-sizing:inherit;-moz-box-sizing:inherit;-webkit-box-sizing:inherit}html{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}body{padding:0;margin:0;font-size:12px;font-family:Figtree,sans-serif}.content{width:100%;height:100%;position:relative;display:block}.page-break{page-break-after:always}.header-logo{display:block;width:100%;height:auto;margin-bottom:.5rem}.header-logo>img{width:auto;height:80px}.text--heading,.text--title{font-family:Figtree,sans-serif;font-size:1.1rem;font-weight:700}.space{padding:0 1rem}.text--heading{margin-top:.5rem!important;margin-bottom:0!important}.text--heading~p{margin-top:0!important;margin-bottom:1.5rem!important}.text--sub-title{font-size:1.15rem!important;margin-bottom:.5rem!important}.sign-table td:first-child,.text--left{text-align:left}.sign-table td:nth-child(2),.text--right{text-align:right}.info-table{margin:10px 0}.info-table td,.info-table th{border:1px solid #000;padding:2px 4px;text-align:left}.info-table th{font-weight:700}.info-table td:first-child{font-weight:700;width:200px!important}.note-table thead th{padding:1rem .5rem;border:1px solid #000}.note-table tbody td{padding:.5rem;border:1px solid #000}.schedule-table{text-align:center}.schedule-table td,.schedule-table th{padding:2px;border:1px solid #000;width:100%!important;max-width:calc(100% / 6)!important}.term-list li{margin-bottom:.35rem}.sign-table{margin-top:1rem}.sign-table td{vertical-align:top;width:calc(100% / 2);}.sign-image{height:80px!important}.footnote{position:fixed;bottom:0;left:0;right:0;height:50px;text-align:center;font-size:.8rem;color:#666!important}.footnote a{color:inherit!important}.footnote>p{margin-top:0!important;margin-bottom:2px!important}.footnote-table td{vertical-align:top;text-align:center;width:calc(100% / 3)}
    </style>
</head>
<body>
    @php $letter = json_decode($data, true); @endphp

    <div class="content">
        @include('pdf.header', compact('logo'))
        @include('pdf.data', compact('letter'))
        @include('pdf.footer', [
            'phone' => $letter['sales_phone'],
            'email' => $letter['sales_email'],
        ])
    </div>
    <div class="page-break"></div>
    <div class="content">
        @include('pdf.header', compact('logo'))
        @include('pdf.terms', compact('letter'))
        @include('pdf.footer', [
            'phone' => $letter['sales_phone'],
            'email' => $letter['sales_email'],
        ])
    </div>

    <script type="text/php">
        if (isset($pdf)) {
            $pdf->page_script('
                $font = $fontMetrics->get_font("Figtree, sans-serif", "normal");
                $size = 9;
                $y = $pdf->get_height() - 30; // Vertical position from the bottom
    
                // Left side: Document control number
                $pdf->text(40, $y, "COL-14/170314", $font, $size);
    
                // Right side: Page number
                $pageText = "Page " . $PAGE_NUM . " of " . $PAGE_COUNT;
                $pdf->text($pdf->get_width() - 80, $y, $pageText, $font, $size);
            ');
        }
    </script>
    
</body>
</html>
