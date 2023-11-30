class MinesweeperGame {
    constructor() {
        this.timer = null;
        this.gameStarted = false;
        this.diff = 0;
        this.grid = [];
        this.gameOver = false;
        this.score = 0;
        this.flags = 0;
        this.mines = 0;
        //this.mg_Ranking = new ManegeRanking();
    }

    // Función para iniciar el juego
    startGame(grid_p) {
        if (this.gameStarted) {
            return; // Si el juego ya ha comenzado, no hacer nada
        }

        this.diff = grid_p.length; // Establecer la dificultad del juego basada en el tamaño del tablero
        this.grid = grid_p; // Almacenar el tablero
        this.gameStarted = true; // Marcar que el juego ha comenzado
        document.getElementById('start').style.visibility = "hidden"; // Ocultar el botón de inicio

        let seconds = 0;
        const timeElement = document.getElementById('time');

        // Iniciar el contador
        this.timer = setInterval(function() {
            seconds++;
            timeElement.textContent = seconds;
        }, 1000);
    }

    // Función para abrir una celda en el tablero
    openCell(row, col) {
        console.log(row, col);
        const rows = this.grid.length;
        const cols = this.grid[0].length;

        // Verificar si la celda está fuera de los límites del tablero
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return new Error('Celda fuera de los límites del tablero');
        }

        // FLAGED
        if (document.getElementById(row + "_" + col).style.backgroundColor == "yellow") {
            return; // No hacer nada si la celda está marcada con una bandera
        }

        // MINA
        if (this.grid[row][col] == -1) {
            this.gameOver = true;
            this.score = 0;
            //alert("END");
            clearInterval(this.timer);
            document.getElementById("mines_p").style.visibility = "visible";
            document.getElementById("result").style.visibility = "visible";


            // Iterar sobre todas las celdas después de perder
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const cellElementLose = document.getElementById(row + "_" + col);
                    if (cellElementLose) {
                        // Cambiar el estilo de las celdas después de perder
                        if (this.grid[row][col] == -1) {
                            cellElementLose.style.backgroundColor = "red";
                        }

                        cellElementLose.style.cursor = "default";
                        cellElementLose.onclick = null;
                        cellElementLose.oncontextmenu = null;

                        // Mostrar contenido en las celdas después de perder
                        if (this.grid[row][col] != 10 && this.grid[row][col] != 0 && this.grid[row][col] != -1) {
                            cellElementLose.innerHTML = this.grid[row][col];
                        }
                        if (this.grid[row][col] == -1) {
                            cellElementLose.innerHTML = '<img src="src/public/img/mine.png" width="25px">';
                        }
                    }
                }
            }

            return;
        }

        // NOT OPENED NOT MINE NOT FLAGGED
        const cellElement = document.getElementById(row + "_" + col);

        // SI ES UN VALUE
        if (this.grid[row][col] >= 1 && this.grid[row][col] <= 8) {
            cellElement.style.backgroundColor = "rgb(207, 167, 167)";   // Semi red
            cellElement.style.cursor = "default";
            cellElement.innerHTML = this.grid[row][col];
            cellElement.onclick = null;
            cellElement.oncontextmenu = null;

            return;
        }

        // SI ES UN 0
        cellElement.style.backgroundColor = "rgb(139, 139, 139)";   // gris claro
        cellElement.innerHTML = 0;
        cellElement.style.cursor = "default";
        this.grid[row][col] = 10;

        cellElement.onclick = null;
        cellElement.oncontextmenu = null;

        // Define las direcciones posibles: arriba, abajo, izquierda, derecha
        const directions = [
            { row: -1, col: 0 }, // arriba
            { row: 1, col: 0 },  // abajo
            { row: 0, col: -1 }, // izquierda
            { row: 0, col: 1 }   // derecha
        ];

        // Recorre todas las direcciones para abrir celdas adyacentes con valor 0
        for (const direction of directions) {
            const newRow = row + direction.row;
            const newCol = col + direction.col;

            // Llama a la función recursivamente para abrir celdas adyacentes con valor 0
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && this.grid[newRow][newCol] != 10) {
                this.openCell(newRow, newCol);
            }
        }
    }

    // Función para manejar clic derecho
    handleRightClick(row, col, event = null) {
        if (event){
            event.preventDefault();
        }

        const rows = this.grid.length;
        const cols = this.grid[0].length;

        console.log(`Clic derecho en la celda (${row}, ${col})`);

        const cellElement = document.getElementById(row + "_" + col);
        const minesHTML = document.getElementById("mines");
        const flagsHTML = document.getElementById("flags");

        // Lógica para cambiar el estado de la celda al hacer clic derecho
        if (cellElement.style.backgroundColor == "yellow") {
            cellElement.style.backgroundColor = "rgb(221, 221, 221)";
            this.flags--;
            flagsHTML.innerHTML = this.flags;

            if (this.grid[row][col] == -1) {
                this.mines--;
                minesHTML.innerHTML = this.mines;
            }
        } else if (this.flags < this.diff) {
            cellElement.style.backgroundColor = "yellow";
            this.flags++;
            flagsHTML.innerHTML = this.flags;

            if (this.grid[row][col] == -1) {
                this.mines++;
                minesHTML.innerHTML = this.mines;

                // Verificar si todas las minas están marcadas después de ganar
                if (minesHTML.innerHTML == this.diff) {
                    // Iterar sobre todas las celdas después de ganar
                    for (let row = 0; row < rows; row++) {
                        for (let col = 0; col < cols; col++) {
                            const cellElementWin = document.getElementById(row + "_" + col);
                            if (cellElementWin.style.backgroundColor == "yellow") {
                                cellElementWin.style.backgroundColor = "green";
                            }
                            cellElementWin.style.cursor = "default";
                            cellElementWin.onclick = null;
                            cellElementWin.oncontextmenu = null;

                            // Mostrar contenido en las celdas después de ganar
                            if (this.grid[row][col] != 10 && this.grid[row][col] != 0 && this.grid[row][col] != -1) {
                                cellElementWin.innerHTML = this.grid[row][col];
                            }
                        }
                    }
                    document.getElementById("mines_p").style.visibility = "visible";
                    clearInterval(this.timer);
                    let score = (1 / this.timer) * this.diff * 100;
                    this.score = 1 + score.toFixed(2);
                    //alert("WIN! Score: " + this.score);
                    let user =  document.getElementById("user").innerHTML;
                    document.getElementById("score_res").innerHTML = this.score;
                    document.getElementById("result").style.visibility = "visible";
                    this.gameOver = true;


                    //this.mg_Ranking.updateRanking(user, this.score);
                }
            }
        }
    }
}
/** @todo */
/*
const fs = require('fs');
class ManegeRanking {

    RANKING_FILE_PATH = '../persistant/manegeRanking.json';

    // Función para leer el archivo JSON del ranking
    readRanking() {
        try {
            const data = fs.readFileSync(RANKING_FILE_PATH, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            // Si el archivo no existe o hay un error al leerlo, devuelve un objeto vacío
            return {};
        }
    }

    // Función para escribir el archivo JSON del ranking
    writeRanking(ranking) {
        fs.writeFileSync(RANKING_FILE_PATH, JSON.stringify(ranking, null, 2), 'utf8');
    }

    // Función para agregar o actualizar la puntuación de un usuario en el ranking
    updateRanking(user, score) {
        const ranking = readRanking();

        // Actualizar la puntuación del usuario
        ranking[user] = score;

        // Ordenar el ranking por puntuación de mayor a menor (copiado)
        const sortedRanking = Object.entries(ranking)
            .sort((a, b) => b[1] - a[1])
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});

        // Escribir el ranking actualizado en el archivo
        writeRanking(sortedRanking);
    }
}*/

// Crear una instancia de la clase
const minesweeperGame = new MinesweeperGame();

// Exporta la clase
module.exports = MinesweeperGame;