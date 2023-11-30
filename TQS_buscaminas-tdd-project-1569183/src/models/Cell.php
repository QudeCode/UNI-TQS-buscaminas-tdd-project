<?php

namespace Models;

class Cell
{
    private string $state = "";
    private bool $isMine = false;
    private int $value;
    private int $row;
    private int $col;

    public function __construct($row, $col)
    {
        $this->row = $row;
        $this->col = $col;
    }

    public function setState($state_p)
    {
        $this->state = $state_p;
    }

    public function getState()
    {
        return $this->state;
    }

    public function setAsMine()
    {
        $this->isMine = true;
        $this->state = "mine";
    }

    public function isMine()
    {
        return $this->isMine;
    }

    public function setValue($value)
    {
        $this->value = $value;
        $this->state = "empty";
    }
    public function getValue()
    {
        return $this->value;
    }

    public function getRow()
    {
        return $this->row;
    }

    public function getCol()
    {
        return $this->col;
    }
}
