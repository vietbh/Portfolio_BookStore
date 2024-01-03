<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //
    public function login(Request $request){
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Đăng nhập thành công
            $user = Auth::user();
            // dd
            // $accessToken = $user->createToken('authToken')->accessToken;
            $accessToken = $user;

            return response()->json([
                'user' => $user,
                'access_token' => $accessToken
            ]);
        } else {
            // Đăng nhập thất bại
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
}
