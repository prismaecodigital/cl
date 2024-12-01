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
        @include('pdf.footer')
    </div>
    <div class="page-break"></div>
    <div class="content">
        @include('pdf.header', compact('logo'))
        @include('pdf.terms')
        @include('pdf.footer')
    </div>
</body>
</html>
