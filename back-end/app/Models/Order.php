<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function products(){
        return $this->hasMany(Product::class);
    }

    public function users(){
        return $this->hasMany(User::class);
    }

    public function orderproducts(){
        return $this->hasMany(OrderProduct::class);
    }
}
