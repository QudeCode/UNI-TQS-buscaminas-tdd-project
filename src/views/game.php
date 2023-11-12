<div class="board">
    <?php foreach ($grid as $row): ?> <!-- Recorremos el grid, que es un array de filas -->
        <div class="row">
            <?php foreach ($row as $cell): ?> <!-- Recorremos el row, que es un array de celdas -->
                <div class="cell">
                    <?php echo $cell; ?> <!-- Cell contiene el valor 0 o -1, segun si es mina o no -->
                </div>
            <?php endforeach; ?>
        </div>
    <?php endforeach; ?>
</div>