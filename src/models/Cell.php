<?php

class Cell {
    private $isMine;
    private $isRevealed;
    private $isMarked;
    private $adjacentMines;

    // Constructor para inicializar la celda
    public function __construct($isMine) {
        $this->isMine = $isMine;
        $this->isRevealed = false;
        $this->isMarked = false;
        $this->adjacentMines = 0;
    }

    // Otros métodos para operaciones en la celda
}
