<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @vite('resources/css/app.css')
        @vite('public/down/fontawesome/css/all.css')
        <script src="{{asset('js/jquery.js')}}"></script>
        <title>Kool Bio</title>
    </head>
    <body class="antialiased ">
    @include('mainScreens.navbar')
    @include('mainScreens.home')
    @include('mainScreens.footer')
    </body>
</html>
