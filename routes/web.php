<?php

use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth'])->group(static function () {
    Route::get('/bookmarks', [BookmarkController::class, 'index'])->name('bookmark.index');
    Route::get('/bookmarks/add', [BookmarkController::class, 'add'])->name('bookmark.add');
    Route::get('/bookmark/view/{bookmark}', [BookmarkController::class, 'view'])->name('bookmark.view');
    Route::post('/bookmarks/preview', [BookmarkController::class, 'getPreviewData'])->name('bookmark.preview');
    Route::post('/bookmarks/make-active', [BookmarkController::class, 'makeActive'])->name('bookmark.active');
});


