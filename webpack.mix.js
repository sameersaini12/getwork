let mix = require("laravel-mix");

mix.js('resources/js/app.js', 'public/js/app/app.js').sass("resources/css/app.scss" , "public/css/app.css");