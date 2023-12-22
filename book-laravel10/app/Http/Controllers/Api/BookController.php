<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Books;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Lấy danh sách tất cả sách
        $books = Books::all();
        return response()->json($books);
    }

    public function store(Request $request)
    {
        // Tạo mới sách từ dữ liệu được gửi lên
        $book = Books::create($request->all());
        return response()->json($book, 201);
    }

    public function show($id)
    {
        // Lấy thông tin sách theo ID
        $book = Books::findOrFail($id);
        return response()->json($book);
    }

    public function update(Request $request, $id)
    {
        // Cập nhật thông tin sách theo ID
        $book = Books::findOrFail($id);
        $book->update($request->all());
        return response()->json($book);
    }

    public function destroy($id)
    {
        // Xóa sách theo ID
        $book = Books::findOrFail($id);
        $book->delete();
        return response()->json(null, 204);
    }
}
