<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Buscaminas</title>
    <link rel="stylesheet" href="public/css/styles.css">
</head>

<body>
    <div class="board">
        <?php foreach ($gameModel->getGrid() as $row): ?>
            <div class="row">
                <?php foreach ($row as $cell): ?>
                    <div class="cell">
                        <?php echo $cell; ?>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endforeach; ?>
    </div>

</body>

</html>