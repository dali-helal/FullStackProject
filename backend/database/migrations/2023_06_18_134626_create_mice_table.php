<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mouses', function (Blueprint $table) {
            $table->increments('mouse_id');
            $table->string('name');
            $table->text('description');
            $table->decimal('price');
            $table->float('rating');
            $table->json('reviews')->nullable();
            $table->json('pictures')->nullable();
            $table->string('brand');
            $table->string('mouseType');
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
        Schema::dropIfExists('mouses');
    }
}
