<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use shweshi\OpenGraph\OpenGraph;

class BookmarkController extends Controller
{
    public function index(): Response
    {
        $bookmarks = Bookmark::query()->where('user_id', Auth::user()->id)->get();
        return Inertia::render('Bookmark/List/index',[
            'bookmarks' => $bookmarks,
        ]);
    }

    public function add(): Response
    {
        return Inertia::render('Bookmark/Add/index');
    }

    public function getPreviewData(Request $req): array
    {
        $postData = $req->validate([
            'link' => ['required']
        ]);
//        dd($req);
        return (new \shweshi\OpenGraph\OpenGraph)->fetch($postData['link']);
    }
}
