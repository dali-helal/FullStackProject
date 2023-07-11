<?php

namespace App\Http\Controllers;

use App\Models\Computer;
use Illuminate\Http\Request;

class ComputerController extends Controller
{
    function getAllComputers(){

        $computers=Computer::all();
        return response()->json([
             "computers" =>$computers
        ]);
    }
}
