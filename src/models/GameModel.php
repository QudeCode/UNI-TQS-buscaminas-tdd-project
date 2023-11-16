<?php
class GameModel
{
    private $grid;

    public function __construct($rows, $cols, $mines)
    {
        // Inicializa la cuadrícula del juego
        $this->grid = $this->createEmptyGrid($rows, $cols);

        // Coloca minas aleatoriamente en la cuadrícula
        $this->placeMines($mines);
    }

    public function getGrid()
    {
        return $this->grid;
    }

    private function createEmptyGrid($rows, $cols)
    {
        $grid = array();
        for ($i = 0; $i < $rows; $i++) {
            $row = array();
            for ($j = 0; $j < $cols; $j++) {
                $row[] = 0; // 0 representa una celda vacía
            }
            $grid[] = $row;
        }
        return $grid;
    }

    private function placeMines($mines)
    {
        $rows = count($this->grid);
        $cols = count($this->grid[0]);

        for ($i = 0; $i < $mines; $i++) {
            $row = rand(0, $rows - 1);
            $col = rand(0, $cols - 1);

            // Verifica si la celda ya contiene una mina
            if ($this->grid[$row][$col] == -1) {
                $i--; // Repite el ciclo para colocar otra mina
            } else {
                $this->grid[$row][$col] = -1; // -1 representa una mina
            }
        }
    }
}