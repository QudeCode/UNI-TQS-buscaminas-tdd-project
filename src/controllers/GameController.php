<?php

namespace Controllers;

use Models\Grid;

require_once __DIR__.'/../models/Cell.php';
require_once __DIR__.'/../models/Grid.php';

class GameController {
    private Grid $grid;
    private string $difficulty;
    private int $mines;

    public function __construct(string $difficulty) {
        $this->difficulty = $difficulty;
        $this->grid = new Grid($difficulty);

        $this->initializeGame($difficulty);
    }

    public function getGrid() {
        return $this->grid;
    }

    private function initializeGame($difficulty) {
        switch($difficulty) {
            case "easy":
                $this->mines = 5;
                break;
            case "normal":
                $this->mines = 10;
                break;
            case "hard":
                $this->mines = 15;
                break;
            default:
                $this->mines = 1;
                break;
        }
        $this->insertMines($this->mines);
        $this->insertValues();
    }

    private function insertMines($quant) {
        $allIndices = range(0, $this->grid->getTotalCells() - 1);

        $mineIndices = array_rand($allIndices, $quant);

        foreach($mineIndices as $index) {
            $row = (int)($index / count($this->grid->getGridArray()[0]));
            $col = $index % count($this->grid->getGridArray()[0]);

            // Establecer la celda como mina
            $this->grid->setMines($row, $col);
        }
    }

    private function insertValues() {
        $rows = $this->grid->getRows();
        $cols = $this->grid->getCols();

        for($row = 0; $row < $rows; $row++) {
            for($col = 0; $col < $cols; $col++) {
                if(!$this->grid->getCell($row, $col)->isMine()) {
                    $value = $this->getMinesAroundCell($row, $col);
                    $this->grid->setValue($row, $col, $value);
                }
            }
        }
    }

    // En la clase Grid
    public function getMinesAroundCell($row, $col) {
        $minesAround = 0;

        // Definir las posiciones alrededor de la celda actual
        $positions = [
            [$row - 1, $col - 1], [$row - 1, $col], [$row - 1, $col + 1],
            [$row, $col - 1], [$row, $col + 1],
            [$row + 1, $col - 1], [$row + 1, $col], [$row + 1, $col + 1],
        ];

        foreach($positions as $position) {
            $r = $position[0];
            $c = $position[1];

            if($r >= 0 && $r < $this->grid->getRows() && $c >= 0 && $c < $this->grid->getCols()) {
                if($this->grid->getCell($r, $c)->isMine()) {
                    $minesAround++;
                }
            }
        }

        return $minesAround;
    }

}

if(isset($_GET["username"], $_GET["difficult"])) {
    $username = $_GET["username"];
    $dificulty = $_GET["difficult"];

    $game_controller = new GameController($dificulty);

    $grid = $game_controller->getGrid();

    require __DIR__.'/../views/game.php';
}
