<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @vite('resources/css/app.css')
        <title>Laravel</title>
    </head>
    <body class="antialiased ">
    <h1 class="text-3xl font-bold underline text-amber-700 hover:text-red-500">
        Hello world!
    </h1>
    </body>
</html>
