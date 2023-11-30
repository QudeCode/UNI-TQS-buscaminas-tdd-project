// Importa la función que necesitas probar
const { submitForm } = require('../src/views/home.php');

// Crear un mock object para el formulario
const formMock = document.createElement('form');
formMock.onsubmit = jest.fn();

// Configurar los elementos del formulario simulado
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.name = 'username';
usernameInput.id = 'username';
usernameInput.required = true;

const difficultySelect = document.createElement('select');
difficultySelect.name = 'difficulty';
difficultySelect.id = 'difficulty';

const easyOption = document.createElement('option');
easyOption.value = 'easy';
easyOption.text = 'Fácil';

const normalOption = document.createElement('option');
normalOption.value = 'normal';
normalOption.text = 'Normal';

const hardOption = document.createElement('option');
hardOption.value = 'hard';
hardOption.text = 'Difícil';

difficultySelect.appendChild(easyOption);
difficultySelect.appendChild(normalOption);
difficultySelect.appendChild(hardOption);

const hiddenInput = document.createElement('input');
hiddenInput.type = 'hidden';
hiddenInput.name = 'action';
hiddenInput.value = 'startGame';

const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Iniciar Juego';

// Agregar los elementos al formulario simulado
formMock.appendChild(usernameInput);
formMock.appendChild(difficultySelect);
formMock.appendChild(hiddenInput);
formMock.appendChild(submitButton);

// Configurar el DOM simulado
document.body.innerHTML = '';
document.body.appendChild(formMock);

/** @test */
/*
 * description: Tests the submitForm function from the home.php file with a mock object for the form.
 * type: Mock Object
*/
test('should call submitForm when the form is submitted', () => {
  // Llama a la función que maneja el envío del formulario
  submitForm();

  // Verifica si la función submitForm fue llamada
  expect(formMock.onsubmit).toHaveBeenCalled();
});
