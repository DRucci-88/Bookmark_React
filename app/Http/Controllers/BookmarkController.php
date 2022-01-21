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
        $bookmarks = Bookmark::query()
            ->where('user_id', Auth::user()->id)
            ->orderByDesc('updated_at')
            ->get();
        return Inertia::render('Bookmark/List/index', [
            'bookmarks' => $bookmarks,
        ]);
    }

    public function add(): Response
    {
        return Inertia::render('Bookmark/Add/index');
    }

    public function getPreviewData(Request $req)//: \Illuminate\Http\RedirectResponse
    {
        $postData = $req->validate([
            'link' => ['required']
        ]);

        $data = (new OpenGraph)->fetch($postData['link'], true);

//        return dd($data);
//        return $req->user();
        $bookmark = Bookmark::create([
            'user_id' => $req->user()->id,
            'title' => $data['title'],
            'description' => $data['description'],
            'type' => $data['type'],
            'url' => $postData['link'],
            'img_url' => $data['image']
        ]);
//        return dd($bookmark);
        return redirect()->route('bookmark.view', [
            'bookmark' => $bookmark->id
        ]);
//        return $data;
    }

    public function view(Bookmark $bookmark)
    {
//        return $bookmark;
//        return Auth::user()->id;
        if (Auth::user()->id !== $bookmark->user_id) {
            abort(401, ' You are nor allowed to view this bookmark');
        }

        return Inertia::render('Bookmark/View/index', [
            'bookmark' => $bookmark
        ]);
    }

    public function makeActive(Request $req)
    {
        $postData = $req->validate([
            'id' => ['required', 'exists:bookmarks,id']
        ]);
        $bookmark = Bookmark::find($postData['id']);
        if ($bookmark) {
            $bookmark->is_active = 1;
            $bookmark->save();
        }


        return redirect()->route('bookmark.index');
    }

}
