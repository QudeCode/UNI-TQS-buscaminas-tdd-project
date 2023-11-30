<div class="form-container">
    <h1>Bienvenido al juego del buscaminas</h1>
    <h2>Ingrese los siguientes datos:</h2>

    <form onsubmit="submitForm(); return false">
        <div class="form-group">
            <label for="username">Nombre de usuario:</label>
            <input type="text" name="username" id="username" required maxlength="15">
        </div>

        <div class="form-group">
            <label for="difficulty">Dificultad:</label>
            <select name="difficulty" id="difficulty">
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