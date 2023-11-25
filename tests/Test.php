<?php

use PHPUnit\Framework\TestCase;
use Models\Cell;

class Test extends TestCase
{
    /** @test */
    public function oneIsone()
    {
        $this->assertEquals(1, 1);
    }
}