<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Confirmation Letter</title>
    <link rel="stylesheet" href="{{ $css }}">
</head>
<body>
    <div class="content">
        @include('pdf.header', ['logo' => $logo])
        @include('pdf.data')
        @include('pdf.footer')
    </div>
    <div class="page-break"></div>
    <div class="content">
        @include('pdf.header', ['logo' => $logo])
        @include('pdf.terms')
        @include('pdf.footer')
    </div>
</body>
</html>
