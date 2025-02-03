<?php

namespace App\Http\Controllers;

use App\Models\Debate;
use Illuminate\Http\Request;

class DebateController extends Controller
{
    public function index(Debate $debate): Debate
    {
        return $debate;
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['required'],
            'user_id' => ['required', 'exists:users'],
            'description' => ['required'],
        ]);

        return Debate::create($data);
    }

    public function show(Debate $debate)
    {
        return $debate;
    }

    public function update(Request $request, Debate $debate)
    {
        $data = $request->validate([
            'title' => ['required'],
            'user_id' => ['required', 'exists:users'],
            'description' => ['required'],
        ]);

        $debate->update($data);

        return $debate;
    }

    public function destroy(Debate $debate)
    {
        $debate->delete();

        return response()->json();
    }
}
