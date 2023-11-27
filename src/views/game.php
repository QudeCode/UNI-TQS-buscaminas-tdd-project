<div class="board">
    <?php foreach ($grid->getGridArray() as $row_d): ?>
        <div class="row">
            <?php foreach ($row_d as $cell_d): ?>
                <div id="<?php echo $cell_d->getRow() ?>_<?php echo $cell_d->getCol() ?>" class="cell" onclick="openCell(
                [
                <?php foreach ($grid->getGridArray() as $row): ?>
                    [
                    <?php foreach ($row as $cell):
                        echo $cell->isMine() ? '-1' : $cell->getValue();
                        ?>
                        ,
                    <?php endforeach; ?>
                    ],
                <?php endforeach; ?>
                ],

                    <?php echo $cell_d->getRow() ?>,<?php echo $cell_d->getCol() ?>)">
                    <?php
                    // Muestra 'X' si la celda es una mina, de lo contrario muestra el contenido de la celda
                    echo $cell_d->isMine() ? 'X' : $cell_d->getValue();
                    ?>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endforeach; ?>
</div>