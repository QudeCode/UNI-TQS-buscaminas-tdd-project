<?php

namespace Models;

class Grid {
    private array $grid;
    private string $difficulty;
    private int $rows;
    private int $cols;

    public function __construct($difficulty) {
        $this->difficulty = $difficulty;

        switch($difficulty) {
            case 'easy':
                $this->rows = 5;
                $this->cols = 5;
                break;
            case 'normal':
                $this->rows = 10;
                $this->cols = 10;
                break;
            case 'hard':
                $this->rows = 15;
                $this->cols = 15;
                break;
            default:
                $this->rows = 1;
                $this->cols = 1;
                break;
        }

        for($i = 0; $i < $this->rows; $i++) {
            for($j = 0; $j < $this->cols; $j++) {
                $this->grid[$i][$j] = new Cell();
            }
        }
    }

    public function setMines($row, $col) {
        $this->grid[$row][$col]->setAsMine();
    }

    public function setValue($row, $col, $value) {
        $this->grid[$row][$col]->setValue($value);
    }

    public function getGridArray() {
        return $this->grid;
    }

    public function getRows() {
        return $this->rows;
    }
    public function getCols() {
        return $this->cols;
    }

    public function getTotalCells() {
        return $this->rows * $this->cols;
    }

    public function getCell($row, $col) {
        return $this->grid[$row][$col];
    }
}