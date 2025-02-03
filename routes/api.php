<?php

use App\Http\Controllers\DebateController;

Route::get('/api/debate/{debate}', [DebateController::class, 'index']);
