<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Requisitions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requisitions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('date');
            $table->string('month');
            $table->string('year');
            $table->string('requisition_no');
            $table->string('budget_head');
            $table->string('benificiary_id');
            $table->string('pic_id');
            $table->string('quantity');
            $table->string('unit');
            $table->string('per_unit_price');
            $table->string('total');
            $table->string('all_total');
            $table->string('cash_payment')->nullable();
            $table->string('bank_payment')->nullable();
            $table->string('tentative_date');
            $table->string('status')->nullable();
            $table->string('files')->nullable();
            $table->integer('create_status');
            $table->integer('review_status')->nullable();
            $table->integer('approval_status')->nullable();

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
        //
    }
}
