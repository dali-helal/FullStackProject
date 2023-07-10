<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required',
        ]);
    
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response([
                'message' => 'Email ou mot de passe incorrect',
            ], 422);
        }
    
      /** @var \App\Models\User $user */
      $user = Auth::user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;
    
        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    }
    public function signup (){
        
    }
    public function logout (Request $request){
         
          /** @var \App\Models\User $user */
          $user = $request->user();
          $user->currentAccessToken()->delete();
          return response('', 204);
    }
}
