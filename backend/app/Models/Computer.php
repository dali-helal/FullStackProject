<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Computer extends Model
{
    use HasFactory;
    protected $primaryKey = 'computer_id';
    protected $table = 'computers';
    protected $fillable = ['name',
                            'description',
                            'price',
                            'rating',
                            'reviews',
                            'pictures',
                            'brand',
                            'procesor',
                            'memory',
                            'storage',
                            'graphicsCard'
    ];
}
