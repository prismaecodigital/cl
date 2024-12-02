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
        Schema::create('note_packages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('note_id');
            $table->unsignedBigInteger('package_id')->nullable();
            $table->integer('qty')->nullable();
            $table->bigInteger('price')->nullable();
            $table->text('note')->nullable();
            $table->timestamps();

            // Added foreign key constraint
            $table->foreign('note_id')->on('notes')->references('id')
                  ->onDelete('cascade');
            $table->foreign('package_id')->on('packages')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('note_packages');
    }
};
