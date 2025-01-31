<?php

use App\Http\Controllers\StatementController;

Route::get('/api/statements', [StatementController::class, 'index']);
