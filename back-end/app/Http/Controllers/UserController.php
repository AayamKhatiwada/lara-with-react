<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request){

        // if($request->input('name') === '' || !$request->input('email') === '' || !$request->input('phoneno') === '' || !$request->input('address') === '' || !$request->input('password') === ''){
        //     return ["error" => "Please fill all the field"];
        // }
        $user = User::where('email', $request->email)->first();

        if($user){
            return ["error" => "Email already in use"];
        }

        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->phoneno = $request->input('phoneno');
        $user->address = $request->input('address');
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return ["user"=> $user];

    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if(!$user){
            return ["error" => "Invalid email"];
        }
        if (!$user || !Hash::check($request->password, $user->password)){
            return ["error"=> "Password is incorrect"];
        }

        return ["user"=> $user];
    }
}
