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
        Schema::create('books', function (Blueprint $table) {
            // $table->id();
            /*
            title: tiêu đề sách
            author: tác giả của sách
            description: mô tả sách
            price: giá sách
            category: danh mục sách
            image: đường dẫn đến hình ảnh sách
            */
            $table->increments('book_id');
            $table->string('book_title',255);
            $table->string('book_author',255);
            $table->text('book_description');
            $table->decimal('book_price', 8, 2);
            $table->unsignedInteger('category_id');
            $table->string('book_image')->nullable();
            $table->integer('book_views')->default(0);
            $table->tinyInteger('book_status')->default(1);
            $table->timestamps();
            
            $table->foreign('category_id')->references('category_id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
