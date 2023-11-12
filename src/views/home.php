<div class="form-container">
    <h1>Bienvenido al juego del buscaminas</h1>
    <h2>Ingrese los siguientes datos:</h2>
    <form action="index.php" method="post">
        <div class="form-group">
            <label for="username">Nombre de usuario:</label>
            <input type="text" name="username" id="username" required>
        </div>

        <div class="form-group">
            <label for="difficult">Dificultad:</label>
            <select name="difficult" id="difficult">
                <option value="easy">Fácil</option>
                <option value="normal">Normal</option>
                <option value="hard">Difícil</option>
            </select>
        </div>

        <div class="form-group">
            <input type="hidden" name="action" value="startGame">
            <input type="submit" value="Iniciar Juego">
        </div>
    </form>
</div>