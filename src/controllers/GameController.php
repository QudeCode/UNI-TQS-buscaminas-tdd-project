<?php

namespace Controllers;

use Models\Grid;

require_once __DIR__ . '/../models/Cell.php';
require_once __DIR__ . '/../models/Grid.php';

class GameController
{
    public function __construct()
    {
    }

    public function createGrid()
    {
        return new Grid;
    }
}


require __DIR__ . '/../views/game.php';