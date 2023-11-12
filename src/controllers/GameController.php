<?php

require_once('models/Cell.php');

require_once('models/Grid.php');

// En el controlador GameController.php
require 'models/GameModel.php';

require_once 'models/GameModel.php';

$rows = 8; // Número de filas
$cols = 8; // Número de columnas
$mines = 10; // Cantidad de minas

$gameModel = new GameModel($rows, $cols, $mines);


require 'views/home.php'; // Carga la vista del juego

class GameController
{
    public function nuevoJuego()
    {
        // Lógica para iniciar un nuevo juego
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