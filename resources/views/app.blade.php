<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Hospital Management') }}</title>

        <link rel="shortcut icon" href="./admin/dist/img/fevicon.png" type="image/x-icon">
        <link rel="stylesheet" href="frontend/assets/css/maicons.css">
        <link rel="stylesheet" href="frontend/assets/css/bootstrap.css">
        <link rel="stylesheet" href="frontend/assets/vendor/owl-carousel/css/owl.carousel.css">
        <link rel="stylesheet" href="frontend/assets/vendor/animate/animate.css">
        <link rel="stylesheet" href="frontend/assets/css/theme.css">
        <link rel="stylesheet" href="{{asset('assets/plugins/fontawesome-free/css/all.min.css')}}">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class=" antialiased">
        @inertia

        <script src="frontend/assets/js/jquery-3.5.1.min.js"></script>
        <script src="frontend/assets/js/bootstrap.bundle.min.js"></script>
        <script src="frontend/assets/vendor/owl-carousel/js/owl.carousel.min.js"></script>
        <script src="frontend/assets/vendor/wow/wow.min.js"></script>
        <script src="frontend/assets/js/theme.js"></script>
    </body>
</html>
