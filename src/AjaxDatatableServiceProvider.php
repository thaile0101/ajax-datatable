<?php

namespace Elidev\AjaxDatatable;

use Illuminate\Support\ServiceProvider;

class AjaxDatatableServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([__DIR__ . '/../resources/views' => resource_path('views/vendor/ajaxdatatable')], 'views');
            $this->publishes([__DIR__ . '/../resources/config/ajaxdatatable.php' => config_path('ajaxdatatable.php')], 'config');
        }

        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'ajaxdatatable');
        $this->mergeConfigFrom(__DIR__ . '/../resources/config/ajaxdatatable.php', 'ajaxdatatable');
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
    }
}
