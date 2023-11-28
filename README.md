# TQS_project

Para jugar al buscaminas, necesitarás un servidor web local. Puedes utilizar herramientas como Laragon, XAMPP, MAMP, o cualquier otro servidor web local de tu elección. Una vez que tengas tu servidor web local configurado, abre el archivo index.php en tu navegador para jugar al buscaminas.

# Buscaminas con testing

- Este es un proyecto de buscaminas desarrollado utilizando la metodología TDD (Desarrollo Guiado por Pruebas) entre otras metodologías/herramientas de testing y las tecnologías PHP, HTML, CSS y JavaScript. 
- Este proyecto se ha creado para la asignatura TQS (Test y Calidad del Software) de la UAB (Universidad Autónoma de Barcelona) en el curso 2023/24.

## Requisitos

### PHP

- PHP 7.0 o superior
    - Puedes verificar la versión de PHP que tienes instalada ejecutando el siguiente comando en la línea de comandos:
```bash
  php -v
```
Puedes descargar PHP desde https://php.net.

- Composer (para la gestión de dependencias de PHP). 
    - Puedes verificar la versión de Composer que tienes instalada ejecutando el siguiente comando en la línea de comandos:
```bash
    composer --version
```
Puedes descargar Composer desde https://getcomposer.org.

### JS
- Node.js y npm
    - Puedes verificar la versión de Node.js que tienes instalada ejecutando el siguiente comando en la línea de comandos:
    ```bash
    node -v
    ```
    - Puedes verificar la versión de npm que tienes instalada ejecutando:
    ```bash
    npm -v
    ```
Puedes descargar Node.js y npm desde https://nodejs.org.
- JSDom
  ```bash
  npm install --save-dev jest-environment-jsdom
  ```

### Servidor web

- Herramienta para crear un servidor web local 
    - (Herramientas como laragon https://laragon.org)
- Navegador web 

### Opcional

- watchexec 1.23.0
    - Puedes verificar la versión de watchexec que tienes instalada ejecutando el siguiente comando en la línea de comandos:
```bash
  watchexec --version
```
Puedes descargar watchexec desde windows ejecutando (con permisos de administrador):
```bash
  choco install watchexec 
```
Puedes instalar chocolately desde https://docs.chocolatey.org/

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/QudeCode/TQS_buscaminas-tdd-project.git
```

2. Instala las dependencias de PHP utilizando Composer.
```bash
composer install
```
3. Instala las dependencias de Node.js utilizando npm:

```bash
npm install
```

# Ejecución de pruebas

### PHP
Para ejecutar las pruebas unitarias, tenemos dos opciones:
- Si tienes watchexec instalado, puedes usar:
```bash
composer execute-tests
```
Esto ejecutará en tiempo real todas las pruebas unitarias del proyecto que se encuentran en el directorio tests/ y te mostrará los resultados en la consola, y se volverán a ejecutar los tests cuando modifiques algun archivo de tests/ o de src/.
- Si no tienes watchexec instalado, y solo dispones de composer puedes usar:
```bash
composer execute-tests_one_time
```
Esto ejecutará todas las pruebas unitarias del proyecto que se encuentran en el directorio tests/ una vez y te mostrará los resultados en la consola.

### JS
Para ejecutar las pruebas unitarias, tenemos dos opciones:
- Si desea ejecutar las pruebas unitarias del proyecto y mostrar los resultados en la consola una vez:
```bash
npm test_one_time
```
- (Opcional) Si deseas ejecutar las pruebas en modo observador para que se vuelvan a ejecutar cuando cambies archivos, puedes usar:
```bash
npm test
```
Para ver el path coverage:
```bash
npm run path_coverage
```
# Uso
Sigue estos pasos para utilizar el proyecto de buscaminas:

1. Abre tu servidor web local con Laragon, XAMPP, MAMP, u otro de tu elección.
2. Una vez que el servidor esté en funcionamiento, coloca el proyecto en el directorio correspondiente (por ejemplo, en el directorio www de Laragon).
3. Abre tu navegador web y accede al proyecto local utilizando la URL proporcionada por tu servidor web (por ejemplo, http://localhost/TQS_project/src/).
4. Ahora podrás jugar al buscaminas abriendo el archivo index.php en tu navegador.