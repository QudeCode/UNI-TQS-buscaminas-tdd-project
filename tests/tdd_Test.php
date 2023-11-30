<?php

use PHPUnit\Framework\TestCase;

use Controllers\GameController;

use Models\Grid;
use Models\Cell;

class tdd_Test extends TestCase {

    /** @test */
    /*
	 * description: Verifies the correct creation of an instance of GameController with the "easy" difficulty level.
	 * type: TDD 
	 */ 
    public function GameControllerTest() {
        $gameController = new GameController("easy");
        $this->assertInstanceOf(
            GameController::class,
            $gameController,
            "gameController should be an instance of GameController"
        );
    }
    /** @test */
      /*
	 * description: Checks if the createGrid function exists and is callable in GameController.
	 * type: TDD 
	 */ 
    public function createGridIsFunction() {
        $gameController = new GameController("easy");
        $this->assertTrue(
            method_exists($gameController, 'getGrid'),
            "createGrid function should exist in GameController"
        );

        $this->assertTrue(
            is_callable([$gameController, 'getGrid']),
            "createGrid function should be callable"
        );
    }

    /** @test */
    /*
	 * description: Ensures that the createGrid function returns something and that the result is an instance of the Grid class.
     * type: TDD
	 */ 
    public function createGridReturn() {
        $gameController = new GameController("easy");

        $grid = $gameController->getGrid();
        $this->assertNotEmpty($grid, "createGrid should return something");

        $this->assertInstanceOf(
            Grid::class,
            $grid,
            "grid should be an instance of Grid"
        );
    }

    /** @test */
     /*
	 * description: Verifies that the grid configuration in GameController is as expected for the "easy" 
     * difficulty and that each element in the grid is an instance of Cell.
     * type: TDD
	 */ 
    public function gridFormat() {
        $gameController = new GameController("easy");
        $grid = $gameController->getGrid();

        $rows = $grid->getRows();
        $cols = $grid->getCols();

        $this->assertEquals(
            5,
            $rows,
            "Rows should be 5 for easy difficulty"
        );

        $this->assertEquals(
            5,
            $cols,
            "Columns should be 5 for easy difficulty"
        );

        $cells = $grid->getGridArray();

        foreach($cells as $row) {
            foreach($row as $cell) {
                $this->assertInstanceOf(
                    Cell::class,
                    $cell,
                    "Each element in the grid should be an instance of Cell"
                );
            }
        }
    }

    /** @test */
     /*
	 * description: Checks that a Cell object can be configured with different states such as "mine", "empty", and "marked".
     * type: TDD
	 */ 
    public function cellStates() {
        $cell1 = new Cell(0, 0);
        $cell1->setState("mine");

        $this->assertEquals(
            "mine",
            $cell1->getState(),
            "a cell could be setted as mine"
        );

        $cell2 = new Cell(0, 0);
        $cell2->setState("empty");

        $this->assertEquals(
            "empty",
            $cell2->getState(),
            "a cell could be setted as empty"
        );

        $cell3 = new Cell(0, 0);
        $cell3->setState("marked");

        $this->assertEquals(
            "marked",
            $cell3->getState(),
            "a cell could be setted as marked"
        );

    }

     /** @test */
     /*
	 * description: Ensures that a cell in the grid can be defined as a mine.
     * type: TDD
	 */ 
    public function setMine() {
        $grid = new Grid("easy");
        $grid->setMines(1, 1);
        $cell = $grid->getCell(1, 1);

        $this->assertEquals(
            true,
            $cell->isMine(),
            "A cell should be posible to be defined as a mine"
        );
    }

    /** @test */
     /*
	 * description: Verifies that the game can be initialized with different difficulty levels
     * ("easy", "normal", "hard") and that the correct number of mines is inserted into the grid.
     * type: TDD
	 */ 
    public function initializeGameTest() {
        $gameController1 = new GameController("easy");
        $grid1 = $gameController1->getGrid();

        $this->assertEquals(
            5,
            $this->countMines($grid1),
            "Game should can be initialized as easy and insert 5 mines in the grid"
        );

        $gameController2 = new GameController("normal");
        $grid2 = $gameController2->getGrid();

        $this->assertEquals(
            10,
            $this->countMines($grid2),
            "Game should can be initialized as normal and insert 10 mines in the grid"
        );

        $gameController3 = new GameController("hard");
        $grid3 = $gameController3->getGrid();

        $this->assertEquals(
            15,
            $this->countMines($grid3),
            "Game should can be initialized as hard and insert 15 mines in the grid"
        );
    }

    /** @test */
     /*
	 * description: Calculates how many mines are around a specific cell and verifies if the result is correct.
     * type: TDD
	 */ 
    public function testGetMinesAroundCell() {
        $gc = new GameController('normal');
        $grid = $gc->getGrid();

        // Configurar el escenario con minas alrededor de una celda específica (por ejemplo, en la posición 1,1)
        $grid->setMines(0, 0);
        $grid->setMines(0, 1);
        $grid->setMines(0, 2);
        $grid->setMines(1, 0);
        $grid->setMines(1, 2);
        $grid->setMines(2, 0);
        $grid->setMines(2, 1);
        $grid->setMines(2, 2);

        // Asegurarse de que hay 8 minas alrededor de la celda (1,1)
        $minesAroundCell = $gc->getMinesAroundCell(1, 1);

        $this->assertEquals(
            8,
            $minesAroundCell,
            "The game should be able to calculate how many mines are arround a cell"
        );
    }

     /** @test */
    /*
    * description: Tests the countMines method to ensure accurate counting of mines in a grid.
    * type: TDD
    */
    private function countMines($grid) {
        $mineCount = 0;

        for($i = 0; $i < $grid->getRows(); $i++) {
            for($j = 0; $j < $grid->getCols(); $j++) {
                if($grid->getCell($i, $j)->isMine()) {
                    $mineCount++;
                }
            }
        }

        return $mineCount;
    }
}
