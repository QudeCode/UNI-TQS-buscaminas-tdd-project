const MinesweeperGame = require('../src/public/js/gameFunctions.js');

jest.useFakeTimers();

describe('Path and functionallity tests', () => {
  beforeEach(() => {
    // Configurar el DOM antes de cada prueba
    document.body.innerHTML = `
      <div id="start">START</div>
      <div id="mines_p">0</div>
      <div id="mines">0</div>
      <div id="flags">0</div>
      <div id="time">0</div>
      <div id="user"></div>
      <div id="score_res"></div>
      <div id="result"></div>
      <div id="0_0" style="background-color: #ddd;"></div>
      <div id="0_1" style="background-color: #ddd;"></div>
      <div id="0_2" style="background-color: #ddd;"></div>
      <div id="1_0" style="background-color: #ddd;"></div>
      <div id="1_1" style="background-color: #ddd;"></div>
      <div id="1_2" style="background-color: #ddd;"></div>
      <div id="2_0" style="background-color: #ddd;"></div>
      <div id="2_1" style="background-color: #ddd;"></div>
      <div id="2_2" style="background-color: #ddd;"></div>
    `;
  });

  test('Start game initializes the timer and hides the start button', () => {
    const minesweeperGame = new MinesweeperGame();
    const grid = [
      [1, 1, 1],
      [1, -1, 1],
      [1, 1, 1]
    ];

    // Antes de llamar a startGame, el juego no ha comenzado
    expect(minesweeperGame.gameStarted).toBe(false);
    // El temporizador no está activo
    expect(minesweeperGame.timer).toBe(null);
    // Verificar que diff sea 3
    expect(minesweeperGame.diff).toBe(0);
    // Verificar que el grid sea el mismo que el proporcionado
    expect(minesweeperGame.grid).toEqual([]);

    minesweeperGame.startGame(grid);

    // Después de llamar a startGame, el juego ha comenzado
    expect(minesweeperGame.gameStarted).toBe(true);
    // El temporizador está activo
    expect(minesweeperGame.timer).toBeDefined();

    // Verificar que el botón de inicio esté oculto
    const startButton = document.getElementById('start');
    expect(startButton.style.visibility).toBe('hidden');

    // Verificar que diff sea 3
    expect(minesweeperGame.diff).toBe(3);

    // Verificar que el grid sea el mismo que el proporcionado
    expect(minesweeperGame.grid).toEqual(grid);
  });

  test('Calling startGame twice does nothing on the second call', () => {
    const minesweeperGame = new MinesweeperGame();
    const grid = [
      [0, 1, 0],
      [0, -1, 0],
      [1, 1, 0]
    ];
  
    // Llama a startGame por primera vez
    minesweeperGame.startGame(grid);
  
    // Captura el estado actual del juego
    const initialGameState = { ...minesweeperGame };
  
    // Llama a startGame por segunda vez
    minesweeperGame.startGame(grid);
  
    // Verifica que el estado del juego no haya cambiado después de la segunda llamada
    expect(minesweeperGame).toEqual(initialGameState);
  });

  test('Open cell reveals the content of the cell and handles adjacent cells', () => {
    const minesweeperGame = new MinesweeperGame();
    const grid = [
        [0, 0, 0],
        [0, 1, 1],
        [0, 1, -1]
    ];

    // Llamar a openCell con las coordenadas apropiadas (0, 0)
    minesweeperGame.startGame(grid);
    minesweeperGame.openCell(0, 0);

    // Verificar que el estado del DOM ha cambiado según las expectativas
    const cellElement0_0 = document.getElementById('0_0');
    const cellElement0_1 = document.getElementById('0_1');
    const cellElement0_2 = document.getElementById('0_2');
    const cellElement1_0 = document.getElementById('1_0');
    const cellElement1_1 = document.getElementById('1_1');
    const cellElement1_2 = document.getElementById('1_2');
    const cellElement2_0 = document.getElementById('2_0');
    const cellElement2_1 = document.getElementById('2_1');
    const cellElement2_2 = document.getElementById('2_2');

    // Se espera que la celda (0, 0) tenga un fondo gris
    expect(cellElement0_0.style.backgroundColor).toBe("rgb(139, 139, 139)");

    // Se espera que la celda (0, 1) tenga un fondo gris
    expect(cellElement0_1.style.backgroundColor).toBe("rgb(139, 139, 139)");

    // Se espera que la celda (0, 2) tenga un fondo gris
    expect(cellElement0_2.style.backgroundColor).toBe("rgb(139, 139, 139)");

    // Se espera que la celda (1, 0) tenga un fondo gris
    expect(cellElement1_0.style.backgroundColor).toBe("rgb(139, 139, 139)");

    // Se espera que la celda (1, 1) tenga un fondo rojizo
    expect(cellElement1_1.style.backgroundColor).toBe("rgb(207, 167, 167)");

    // Se espera que la celda (1, 2) tenga un fondo rojizo
    expect(cellElement1_2.style.backgroundColor).toBe("rgb(207, 167, 167)");

    // Se espera que la celda (2, 0) tenga un fondo gris
    expect(cellElement2_0.style.backgroundColor).toBe("rgb(139, 139, 139)");

    // Se espera que la celda (2, 1) tenga un fondo rojizo
    expect(cellElement2_1.style.backgroundColor).toBe("rgb(207, 167, 167)");

    // Se espera que la celda (2, 2) tenga un fondo blanco (sin cambio ya que no es adyacente Y es mina)
    expect(cellElement2_2.style.backgroundColor).toBe("rgb(221, 221, 221)");
  });

  test('Winning the game', () => {
    const minesweeperGame = new MinesweeperGame();
    const grid = [
      [-1, 1, 1],
      [1, 1, 1],
      [-1, 1, -1]
    ];
  
    // Inicia el juego
    minesweeperGame.startGame(grid);
  
    // Marca todas las minas correctamente
    minesweeperGame.handleRightClick(0, 0);
    minesweeperGame.handleRightClick(2, 0);

    const cellElement0_0 = document.getElementById('0_0');
    expect(cellElement0_0.style.backgroundColor).toBe("yellow");
    
    const cellElement2_0 = document.getElementById('2_0');
    expect(cellElement2_0.style.backgroundColor).toBe("yellow");

    minesweeperGame.handleRightClick(2, 2);
  
    // Despeja todas las celdas no minadas
    minesweeperGame.openCell(0, 1);
    minesweeperGame.openCell(0, 2);
    minesweeperGame.openCell(1, 0);
    minesweeperGame.openCell(1, 1);
    minesweeperGame.openCell(1, 2);
    minesweeperGame.openCell(2, 1);

    const cellElement2_2 = document.getElementById('2_2');

    expect(cellElement0_0.style.backgroundColor).toBe("green");
    expect(cellElement2_0.style.backgroundColor).toBe("green");
    expect(cellElement2_2.style.backgroundColor).toBe("green");
  
    // Verifica que el botón de inicio esté oculto
    const startButton = document.getElementById('start');
    expect(startButton.style.visibility).toBe('hidden');
  
    // Verifica que el juego haya terminado y muestra un mensaje de victoria
    expect(minesweeperGame.gameOver).toBe(true);
    expect(parseFloat(minesweeperGame.score)).toBeGreaterThan(0);
  });
  
  test('Losing the game', () => {
    const minesweeperGame = new MinesweeperGame();
    const grid = [
      [0, 1, 0],
      [0, -1, 0],
      [1, 1, 0]
    ];
  
    // Inicia el juego
    minesweeperGame.startGame(grid);
    
    // Verifica que el botón de inicio esté oculto
    const startButton = document.getElementById('start');
    expect(startButton.style.visibility).toBe('hidden');
  
    // Abre una celda con una mina
    minesweeperGame.openCell(1, 1);

    const cellElement1_1 = document.getElementById('1_1');
    expect(cellElement1_1.style.backgroundColor).toBe("red");

    // Verifica que el juego haya terminado y no haya score
    expect(minesweeperGame.gameOver).toBe(true);
    expect(minesweeperGame.score).toBe(0);
  });

  test('Timer is initialized and updates time element every second', () => {
    const minesweeperGame = new MinesweeperGame();
    const grid = [
      [1, 1, 1],
      [1, -1, 1],
      [1, 1, 1]
    ];

    // Inicia el juego
    minesweeperGame.startGame(grid);

    // Verifica que el temporizador esté inicializado
    expect(minesweeperGame.timer).toBeDefined();

    // Simula el paso del tiempo en 1 segundo
    jest.advanceTimersByTime(1000);

    // Verifica que el contenido del elemento de tiempo se haya actualizado
    const timeElement = document.getElementById('time');
    expect(timeElement.textContent).toBe('1');
  });

  describe('Funciones del Juego', () => {
    test('Opening cell outside the board boundaries does nothing', () => {
      const minesweeperGame = new MinesweeperGame();
      const grid = [
        [0, 0, 0],
        [0, 1, 1],
        [0, 1, -1]
      ];

      // Iniciar el juego
      minesweeperGame.startGame(grid);

      // Capturar el estado inicial del juego
      const estadoInicial = { ...minesweeperGame };

      // Intentar abrir una celda fuera de los límites del tablero
      minesweeperGame.openCell(-1, 0);

      // Verificar que el estado del juego no ha cambiado
      expect(minesweeperGame).toEqual(estadoInicial);

      // Intentar abrir una celda fuera de los límites del tablero
      minesweeperGame.openCell(3, 2);

      // Verificar que el estado del juego no ha cambiado
      expect(minesweeperGame).toEqual(estadoInicial);
    });
  });
  test('Do nothing if the cell is marked with a flag', () => {
    const minesweeperGame = new MinesweeperGame();
    const grid = [
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, -1]
    ];

    // Iniciar el juego
    minesweeperGame.startGame(grid);

    // Marcar una celda con una bandera
    minesweeperGame.handleRightClick(1, 1);

    // Capturar el estado inicial del juego
    const estadoInicial = { ...minesweeperGame };

    // Intentar abrir la celda marcada con una bandera
    minesweeperGame.openCell(1, 1);

    // Verificar que el estado del juego no ha cambiado
    expect(minesweeperGame).toEqual(estadoInicial);
  });
  test('Change cell state on right click if it is marked with a flag', () => {
    const minesweeperGame = new MinesweeperGame();
    const grid = [
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, -1]
    ];

    // Iniciar el juego
    minesweeperGame.startGame(grid);

    // Marcar una celda con una bandera
    minesweeperGame.handleRightClick(2, 2);

    // Capturar el estado inicial del juego
    const estadoInicial = { ...minesweeperGame };

    // Intentar cambiar el estado de la celda al hacer clic derecho
    minesweeperGame.handleRightClick(2, 2);

    // Verificar que el estado de la celda ha cambiado
    const cellElement = document.getElementById('2_2');
    expect(cellElement.style.backgroundColor).toBe('rgb(221, 221, 221)');

    // Verificar que las variables de juego han sido actualizadas
    expect(minesweeperGame.flags).toBe(estadoInicial.flags - 1);
    expect(minesweeperGame.mines).toBe(estadoInicial.mines - 1);
  });
});


