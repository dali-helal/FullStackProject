<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComputersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('computers', function (Blueprint $table) {
            $table->increments('computer_id');
            $table->string('name');
            $table->text('description');
            $table->decimal('price');
            $table->float('rating');
            $table->json('reviews')->nullable();
            $table->json('pictures')->nullable();
            $table->string('brand');
            $table->string('procesor');
            $table->string('memory');
            $table->string('storage');
            $table->string('graphicsCard');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('computers');
    }
}
