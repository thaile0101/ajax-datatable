const { mix } = require('laravel-mix');

mix.sass('resources/assets/scss/table.scss', 'public/elidev.metronic.ajax.datatable.css');
mix.js(['resources/assets/js/jquery.ajax.datatable.js'], 'public/elidev.metronic.ajax.datatable.js');

if (mix.config.inProduction) {
    mix.version();
}
