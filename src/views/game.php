<div class="board">
    <?php foreach($grid->getGridArray() as $row): ?>
        <div class="row">
            <?php foreach($row as $cell): ?>
                <div class="cell">
                    <?php
                    // Muestra 'X' si la celda es una mina, de lo contrario muestra el contenido de la celda
                    echo $cell->isMine() ? 'X' : $cell->getValue();
                    ?>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endforeach; ?>
</div>