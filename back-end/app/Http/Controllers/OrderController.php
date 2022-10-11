<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderProduct;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function submit_order(Request $request){
        
        $order = Order::create([
            'user_id' => $request->id,
            'name' => $request->name,
            'phoneno' => $request->phoneno,
            'email' => $request->email,
            'address' => $request->address,
            'total' => $request->total,
        ]);

        foreach ($request->orderItems as $cart) {
            OrderProduct::create([
                'order_id' => $order->id,
                'product_id' => $cart['id'],
                'quantity' => $cart['quantity'],
                'price'=> $cart['price'],
            ]);
        }

        return ['success'=> 'successfull'];
    }
}
