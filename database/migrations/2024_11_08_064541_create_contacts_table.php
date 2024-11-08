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
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('organization_id');
            $table->string('name', '100');
            $table->string('phone', 16)->unique();
            $table->string('fax', 25)->nullable();
            $table->string('email', 50)->unique();
            $table->timestamps();

            // Added foreign key constraint
            $table->foreign('organization_id')->on('organizations')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
