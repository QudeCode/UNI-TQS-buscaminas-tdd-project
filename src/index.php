<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/css/styles.css">
    <title>BUSCAMINAS</title>
</head>

<body>
    <?php require_once('views/templates/header.php'); ?>

    <div id="main-content">
        <?php
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            // Si nos llega POST es que el form esta enviado y cargamos el juego
            $action = $_POST['action'];
            $dificultad = $_POST['difficult'];

            require_once('controllers/GameController.php');
        } else {
            // Sino debemos mostrar el form
            require_once('views/home.php');
        }
        ?>
    </div>

    <?php require_once('views/templates/footer.php'); ?>

</body>

</html>