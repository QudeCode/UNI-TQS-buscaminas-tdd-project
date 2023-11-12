<?php

use PHPUnit\Framework\TestCase;
use Models\Cell;

class Test extends TestCase
{
    /** @test */
    public function it_can_be_created_with_(Cell $cell)
    {
        $this->assertInstanceOf(Cell::class, $cell);
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