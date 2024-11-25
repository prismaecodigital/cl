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
        Schema::create('letters', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by');
            $table->unsignedBigInteger('organization_id');
            $table->unsignedBigInteger('contact_id');
            $table->unsignedBigInteger('event_id');
            $table->unsignedBigInteger('room_id');
            $table->timestamp('check_in');
            $table->timestamp('check_out');
            $table->integer('attendance');
            $table->enum('payment', ['cash', 'transfer']);
            $table->timestamps();

            // Added foreign key constraint
            $table->foreign('created_by')->on('users')->references('id');
            $table->foreign('organization_id')->on('organizations')->references('id');
            $table->foreign('contact_id')->on('contacts')->references('id');
            $table->foreign('event_id')->on('events')->references('id');
            $table->foreign('room_id')->on('rooms')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('letters');
    }
};
