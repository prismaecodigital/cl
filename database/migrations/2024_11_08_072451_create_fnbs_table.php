<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('fnbs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('letter_id');
            $table->date('date')->nullable();
            $table->string('breakfast', 10)->nullable();
            $table->string('cb_morning', 10)->nullable();
            $table->string('lunch', 10)->nullable();
            $table->string('cb_evening', 10)->nullable();
            $table->string('dinner', 10)->nullable();
            $table->string('cb_night', 10)->nullable();
            $table->timestamps();

            // Added foreign key constraint
            $table->foreign('letter_id')->on('letters')->references('id')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fnbs');
    }
};
