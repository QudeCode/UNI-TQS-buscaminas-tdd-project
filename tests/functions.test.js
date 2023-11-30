const { openCell } = require('../src/public/js/gameFunctions');

// Función para inicializar un tablero de prueba
function createTestGrid(rows, cols, initialValue = 0) {
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(initialValue);
    }
    grid.push(row);
  }
  return grid;
}

// Prueba inicial para abrir una celda en un tablero vacío
test('openCell should log the value of the cell', () => {
  // Arrange
  const grid = createTestGrid(3, 3); // Crea un tablero de 3x3 con valores 0
  const row = 1;
  const col = 1;

  // Act
  openCell(grid, row, col);

  //openCell(1, 1);

  //expect(board[row][col].isOpen).toBe(true);
});
