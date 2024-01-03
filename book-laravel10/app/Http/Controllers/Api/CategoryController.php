<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Lấy danh sách tất cả sách
        $categories = Categories::all();
        return response()->json($categories);
    }

    public function store(Request $request)
    {
        // Tạo mới sách từ dữ liệu được gửi lên
        $category = Categories::create($request->all());
        return response()->json($category, 201);
    }

    public function show($id)
    {
        // Lấy thông tin sách theo ID
        $category = Categories::findOrFail($id);
        return response()->json($category);
    }

    public function update(Request $request, $id)
    {
        // Cập nhật thông tin sách theo ID
        $category = Categories::findOrFail($id);
        $category->update($request->all());
        return response()->json($category);
    }

    public function destroy($id)
    {
        // Xóa sách theo ID
        $category = Categories::findOrFail($id);
        $category->delete();
        return response()->json(null, 204);
    }
}
