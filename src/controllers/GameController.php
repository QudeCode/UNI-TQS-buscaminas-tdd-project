<?php
require_once('models/Cell.php');
require_once('models/Grid.php');
require_once('models/GameModel.php');

if (isset($dificultad)) {
    switch ($dificultad) {
        case 'easy':
            $rows = 5;
            $cols = 5;
            $mines = 5;
            break;
        case 'normal':
            $rows = 8;
            $cols = 8;
            $mines = 8;
            break;
        case 'hard':
            $rows = 12;
            $cols = 12;
            $mines = 12;
            break;
    }

    $gameController = new GameController($rows, $cols, $mines);
    $grid = $gameController->nuevoJuego();

    require 'views/game.php'; // Carga la vista del juego
}


class GameController
{
    private $rows;
    private $cols;
    private $mines;

    public function __construct($rows, $cols, $mines)
    {
        $this->rows = $rows;
        $this->cols = $cols;
        $this->mines = $mines;
    }

    public function nuevoJuego()
    {
        // Lógica para iniciar un nuevo juego
        $gameModel = new GameModel($this->rows, $this->cols, $this->mines);

        $grid = $gameModel->getGrid();

        //echo "grid rows: ";
        //print_r($grid);

        return $grid;
    }

    public function hacerMovimiento()
    {
        // Lógica para procesar el movimiento del usuario en el juego
    }

    public function guardarPuntuación()
    {
        // Lógica para guardar la puntuación del usuario
    }
}