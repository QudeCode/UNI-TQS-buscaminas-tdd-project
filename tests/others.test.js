const MinesweeperGame = require('../src/public/js/gameFunctions.js');

describe('Particions and limit values', () => {
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
      div id="2_1" style="background-color: #ddd;"></div>
      <div id="2_2" style="background-color: #ddd;"></div>
    `;
  });

  describe('openCell', () => {
    const minesweeperGame = new MinesweeperGame();

    const grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    // Lista de todos los valores válidos para row y col (del 0 al 2)
    const validValues = [0, 1, 2];

    // Lista de valores límite
    const limitValues = [0, 2];

    // Lista de valores de frontera 
    const frontierValues = [-1, 3];

    validValues.forEach((row) => {
      validValues.forEach((col) => {
        test(`should open cell at (${row}, ${col})`, () => {
          try {
            minesweeperGame.startGame(grid);
            minesweeperGame.openCell(row, col);
            // No debería lanzar un error
            expect(true).toBe(true);
          } catch (error) {
            // Si llega aquí, se lanzó un error inesperado
            expect(false).toBe(true);
          }
        });
      });
    });

    limitValues.forEach((row) => {
      validValues.forEach((col) => {
        test(`should open cell with row ${row} and col ${col}`, () => {
          try {
            minesweeperGame.startGame(grid);
            minesweeperGame.openCell(row, col);
            // No debería lanzar un error
            expect(true).toBe(true);
          } catch (error) {
            // Si llega aquí, se lanzó un error inesperado
            expect(false).toBe(true);
          }
        });
      });

      validValues.forEach((col) => {
        test(`should not open cell with row ${col} and col ${row}`, () => {
          try {
            minesweeperGame.startGame(grid);
            minesweeperGame.openCell(col, row);
            // Si llega aquí, se esperaba un error
            expect(false).toBe(true);
          } catch (error) {
            // debería lanzar un error
            expect(true).toBe(true);
          }
        });
      });
    });

    frontierValues.forEach((row) => {
      validValues.forEach((col) => {
        test(`should open cell at (${row}, ${col}) on the top row`, () => {
          try {
            minesweeperGame.startGame(grid);
            minesweeperGame.openCell(row, col);
            // Si llega aquí, se esperaba un error
            expect(false).toBe(true);
          } catch (error) {
            // debería lanzar un error
            expect(true).toBe(true);
          }
        });
      });

      validValues.forEach((col) => {
        test(`should open cell at (${col}, ${row}) on the left column`, () => {
          try {
            minesweeperGame.startGame(grid);
            minesweeperGame.openCell(col, row);
            // Si llega aquí, se esperaba un error
            expect(false).toBe(true);
          } catch (error) {
            // debería lanzar un error
            expect(true).toBe(true);
          }
        });
      });
    });

  });
});

describe('Particions and limit values', () => {
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
        div id="2_1" style="background-color: #ddd;"></div>
        <div id="2_2" style="background-color: #ddd;"></div>
      `;
    });

    describe('openCell', () => {
        // Tablero proporcionado
        const grid = [
          [0, 0, 0],
          [0, 1, 1],
          [0, 1, -1]
        ];
    
        // Combinaciones pairwise para openCell
        each([
          [0, 0],
          [0, 1],
          [0, 2],
          [1, 0],
          [1, 1],
          [1, 2],
          [2, 0],
          [2, 1],
          [2, 2],
        ]).test('should open cell at (%d, %d)', (row, col) => {
          minesweeperGame.startGame(grid);
          error_done = false;
          try{
              minesweeperGame.openCell(row, col);
          } 
          catch {
            error_done = true;
          }
    
          if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
            // Verificar si la celda está fuera de los límites del tablero
            expect(error_done).toBe(true);
          } else {
            expect(error_done).toBe(false);
          }
          
        });
    });
});

describe('LoopTesting', () => {
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
          div id="2_1" style="background-color: #ddd;"></div>
          <div id="2_2" style="background-color: #ddd;"></div>
        `; 
    });
    
    describe('openCell', () => {
      const testCases = [
        {
          description: 'should open cell on a board with no mines',
          grid: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
          ],
          coordinates: [
            { row: 0, col: 0 },
            { row: 1, col: 1 },
            { row: 2, col: 2 }
            // Add more coordinates as needed
          ]
        },
        {
          description: 'should handle mines on the board',
          grid: [
            [0, 0, 0],
            [0, 1, -1],
            [0, 1, 1]
          ],
          coordinates: [
            { row: 0, col: 0 },
            { row: 1, col: 1 },
            { row: 2, col: 2 }
            // Add more coordinates as needed
          ]
        }
        // Add more test cases as needed
      ];
  
      testCases.forEach((testCase) => {
        test(testCase.description, () => {
          const minesweeperGame = new MinesweeperGame();
          minesweeperGame.startGame(testCase.grid);
  
          testCase.coordinates.forEach(({ row, col }) => {
            minesweeperGame.openCell(row, col);
          });
        });
      });
    });
  });