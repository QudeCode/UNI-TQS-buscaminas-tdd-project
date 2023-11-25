<?php

use PHPUnit\Framework\TestCase;
use Models\Cell;

class Test extends TestCase
{
    /** @test */
    public function oneIsone()
    {
        $this->assertInstanceOf(Cell::class, $cell);
    }
    /** @test */
    public function one_equals_one(){

        $this->assertEquals(1,1);  
    }

    /** @test */
    public function prueba()
    {
        // Setup
        $cell = new Cell(true);

        // Accion
        // $cell->getValue(1, 1);

        // Aserciones
        // $this->assertEquals(1 | -1 | 0, $cell->getValue(1, 1));
    }
}