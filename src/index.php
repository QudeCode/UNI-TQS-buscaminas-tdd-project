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

    <?php
    require_once 'controllers/GameController.php';

    $accion = isset($_GET['accion']) ? $_GET['accion'] : 'nuevoJuego';

    // Crea una instancia del controlador Game
    $controlador = new GameController();

    // Llama al método correspondiente
    if (method_exists($controlador, $accion)) {
        $controlador->$accion();
    } else {
        // Manejar acciones desconocidas o inválidas
        echo "Acción no válida.";
    }
    ?>

    <?php require_once('views/templates/footer.php'); ?>

</body>



</html>