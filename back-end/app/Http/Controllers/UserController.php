<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request){
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->phoneno = $request->input('phoneno');
        $user->address = $request->input('address');
        $user->password = Hash::make($request->input('password'));
        $user->save();
        return  $user;
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)){
            return ["error"=> "Email and password are mismatched"];
        }

        return $user;
    }
}
