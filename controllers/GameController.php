<?php

require_once('models/Cell.php');

require_once('models/Grid.php');

// En el controlador GameController.php
require 'models/GameModel.php';

require_once 'models/GameModel.php';

$gameController = new GameController();
$grid = $gameController->nuevoJuego();

require 'views/home.php'; // Carga la vista del juego

class GameController
{
    private $rows = 8; // Número de filas
    private $cols = 8; // Número de columnas
    private $mines = 10; // Cantidad de minas

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