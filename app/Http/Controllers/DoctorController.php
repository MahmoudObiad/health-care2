<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Doctor;


class DoctorController extends Controller
{
     
  
    public function index()
    {
         
        $doctors = Doctor::all();
        return view('admin.doctor.index',compact('doctors'));
    }
 
     
}
