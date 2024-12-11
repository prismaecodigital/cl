<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Confirmation Letter</title>
    <style>@font-face{font-family:Figtree;font-weight:400;src:url('https://fonts.bunny.net/css?family=figtree:400&display=swap') format('woff2')}@font-face{font-family:Figtree;font-weight:500;src:url('https://fonts.bunny.net/css?family=figtree:500&display=swap') format('woff2')}@font-face{font-family:Figtree;font-weight:600;src:url('https://fonts.bunny.net/css?family=figtree:600&display=swap') format('woff2')}</style>
    <style>
        @page {margin: 5mm 15mm 20mm;}*,::after,::before{box-sizing:inherit;-moz-box-sizing:inherit;-webkit-box-sizing:inherit}html{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}body{padding:0;margin:0;font-size:11px;font-family:Figtree,sans-serif}.header-logo,.text--center{text-align:center}.footnote-table,.info-table,.note-table,.schedule-table,.sign-table{width:100%;border-collapse:collapse}.content{width:100%;height:100%;position:relative;display:block;}.page-break{page-break-after:always}.header-logo{display:block;width:100%;height:auto;margin-bottom:.5em}.header-logo>img{width:auto;height:80px}.text--heading,.text--title{font-family:Figtree,sans-serif;font-weight:700}.space{padding:0 1em}.text--heading{font-size:1.2em!important;margin-top:.5em!important;margin-bottom:0!important}.text--heading~p{margin-top:0!important;margin-bottom:1.5em!important}.text--title{font-size:1.15em!important}.text--sub-title{font-size:1.15em!important;margin-bottom:.5em!important}.sign-table td:first-child,.text--left{text-align:left}.sign-table td:nth-child(2),.text--right{text-align:right}.info-table{margin:10px 0}.info-table td,.info-table th{border:1px solid #000;padding:1px 2px;text-align:left}.info-table th,.info-table tr:first-child{font-weight:700!important}.info-table td:first-child{font-weight:700;width:200px!important}.note-table thead th{padding:2px;border:1px solid #000}.note-table tbody td{padding:2px;border:1px solid #000}.schedule-table{text-align:center}.schedule-table td,.schedule-table th{padding:2px;border:1px solid #000;width:100%!important;max-width:calc(100% / 6)!important}.term-list li{margin-bottom:.35em}.sign-table{margin-top:1em}.sign-table td{vertical-align:top;width:calc(100% / 2)}.sign-image{height:80px!important}.footnote{position:fixed;bottom:0;left:0;right:0;height:50px;text-align:center;font-size:.8em;color:#666!important}.footnote a{color:inherit!important}.footnote>p{margin-top:0!important;margin-bottom:2px!important}.footnote-table td{vertical-align:top;text-align:center;width:calc(100% / 3)}.sign-image{padding: 5px 0;}.sign-image>td>img{width:auto;height:90px!important;}
    </style>
</head>
<body>
    @php $letter = json_decode($data, true); @endphp

    <div class="content">
        @include('pdf.header', compact('logo'))
        @include('pdf.data', compact('letter'))
    </div>
    <div class="page-break"></div>
    <div class="content">
        @include('pdf.header', compact('logo'))
        @include('pdf.terms', [
            'letter' => $letter,
            'sign' => $sign
        ])
    </div>

    <script type="text/php">
        if (isset($pdf)) {
            $salesEmail = "{{ $letter['sales_email'] ?? 'N/A' }}"; // Embed as plain text
    
            $pdf->page_script('
                $font = $fontMetrics->get_font("Figtree, sans-serif", "normal");
                $size = 9;
                $yTop = $pdf->get_height() - 60;
                $yCenter = $pdf->get_height() - 45;
                $yBottom = $pdf->get_height() - 30;
    
                // Top center: Address
                $pdf->text(70, $yTop, "PT. Ole Maju Sejahtera, Kawasan Darmawan Park Jl. Raya Babakan Madang No. 99, Sentul Selatan, Bogor 16810", $font, $size);
    
                // Left center: Phone
                $pdf->text(40, $yCenter, "Phone: +62-21-87950137", $font, $size);

                // Center: Website
                $pdf->text(260, $yCenter, "www.olesuite.com", $font, $size);
    
                // Right center: Email
                $pdf->text($pdf->get_width() - 165, $yCenter, "E-mail: ' . $salesEmail . '", $font, $size);
    
                // Left side: Document control number
                $pdf->text(40, $yBottom, "COL-14/170314", $font, $size);
    
                // Right side: Page number
                $pageText = "Page " . $PAGE_NUM . " of " . $PAGE_COUNT;
                $pdf->text($pdf->get_width() - 80, $yBottom, $pageText, $font, $size);
            ');
        }
    </script>    
    
</body>
</html>
