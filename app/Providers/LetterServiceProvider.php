<?php

namespace App\Providers;

use App\Services\LetterService;
use Illuminate\Support\ServiceProvider;

class LetterServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(LetterService::class, function ($app) {
            return new LetterService();
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
