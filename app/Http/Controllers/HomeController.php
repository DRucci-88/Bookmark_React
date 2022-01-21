<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(): \Illuminate\Http\RedirectResponse
    {
//        return Inertia::render('Home/index');
        return redirect()->route('bookmark.index');
    }
}
