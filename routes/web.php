<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\{DoctorController,HomeController};


Route::get('/', fn() => redirect()->route('login'));

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/doctor', [App\Http\Controllers\DoctorController::class, 'index'])->name('doctor');
