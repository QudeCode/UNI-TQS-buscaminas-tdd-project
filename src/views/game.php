<div class="board">
    <?php foreach($grid->getGridArray() as $row_d): ?>
        <div class="row">
            <?php foreach($row_d as $cell_d): ?>
                <div class="cell" id="<?php echo $cell_d->getRow() ?>_<?php echo $cell_d->getCol() ?>" onclick="minesweeperGame.openCell(
                    <?php echo $cell_d->getRow() ?>,<?php echo $cell_d->getCol() ?>)" oncontextmenu="minesweeperGame.handleRightClick(
                    <?php echo $cell_d->getRow() ?>,<?php echo $cell_d->getCol() ?>, event 
                    )">

                    <!-- CONTENIDO DE LA CELDA -->
                    <?php
                    // Muestra 'X' si la celda es una mina, de lo contrario muestra el contenido de la celda
                    // echo $cell_d->isMine() ? 'X' : $cell_d->getValue();
                    ?>

                </div>
            <?php endforeach; ?>
        </div>
    <?php endforeach; ?>
</div>

<div id="score" class="boxDisplay">
    <p id="mines_p"> Mines found: <span id="mines">0</span> </p>
    <p> Time: <span id="time">0</span> </p>
    <p id="flags_p"> Flags: <span id="flags">0</span> /
        <?php echo $grid->getCols(); ?>
    </p>
</div>

<div id="result" class="boxDisplay">
    <p id="user_p"> User: <span id="user">
            <?php echo $username; ?>
        </span> </p>
    <p> Score: <span id="score_res"></span> </p>

</div>

<div id="start" onclick="minesweeperGame.startGame(
    [
    <?php foreach($grid->getGridArray() as $row): ?>
        [
        <?php foreach($row as $cell):
            echo $cell->isMine() ? '-1' : $cell->getValue();
            ?>
            ,
        <?php endforeach; ?>
        ],
    <?php endforeach; ?>
    ]
)">START</div>