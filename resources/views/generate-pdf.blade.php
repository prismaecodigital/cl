<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Confirmation Letter</title>
    <link rel="stylesheet" href="{{ $css }}">
    <style>@font-face{font-family:Figtree;font-weight:400;src:url('https://fonts.bunny.net/css?family=figtree:400&display=swap') format('woff2')}@font-face{font-family:Figtree;font-weight:500;src:url('https://fonts.bunny.net/css?family=figtree:500&display=swap') format('woff2')}@font-face{font-family:Figtree;font-weight:600;src:url('https://fonts.bunny.net/css?family=figtree:600&display=swap') format('woff2')}</style>
</head>
<body>
    @php $letter = json_decode($data, true); @endphp

    <div class="content">
        @include('pdf.header', compact('logo'))
        @include('pdf.data', compact('letter'))
        @include('pdf.footer', [
            'phone' => $letter['phone'],
            'email' => $letter['email'],
        ])
    </div>
    <div class="page-break"></div>
    <div class="content">
        @include('pdf.header', compact('logo'))
        @include('pdf.terms', compact('letter'))
        @include('pdf.footer', [
            'phone' => $letter['phone'],
            'email' => $letter['email'],
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
