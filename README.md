# TQS_project

Para jugar al buscaminas, necesitarás un servidor web local. Puedes utilizar herramientas como Laragon, XAMPP, MAMP, o cualquier otro servidor web local de tu elección. Una vez que tengas tu servidor web local configurado, abre el archivo index.php en tu navegador para jugar al buscaminas.

# Buscaminas con TDD

- Este es un proyecto de buscaminas desarrollado utilizando la metodología TDD (Desarrollo Guiado por Pruebas) y las tecnologías PHP, HTML, CSS y JavaScript. 
- Este proyecto se ha creado para la asignatura TQS (Test y Calidad del Software) de la UAB (Universidad Autónoma de Barcelona) en el curso 2023/24.

## Requisitos

- PHP 7.0 o superior
Puedes verificar la versión de PHP que tienes instalada ejecutando el siguiente comando en la línea de comandos:
```bash
  php -v
```
Puedes descargar PHP desde https://php.net.
- Composer (para la gestión de dependencias de PHP). Puedes verificar la versión de Composer que tienes instalada ejecutando el siguiente comando en la línea de comandos:
```bash
    composer --version
```
Puedes descargar Composer desde https://getcomposer.org.
- Herramienta para crear un servidor web local (como laragon https://laragon.org)
- Navegador web 

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/QudeCode/TQS_buscaminas-tdd-project.git
```

2. Instala las dependencias de PHP utilizando Composer.
```bash
composer install
```
# Ejecución de pruebas
Para ejecutar las pruebas unitarias, utiliza el siguiente comando:
```bash
vendor/bin/phpunit tests
```
Esto ejecutará todas las pruebas unitarias del proyecto que se encuentran en el directorio tests/ y te mostrará los resultados en la consola.

# Uso
Sigue estos pasos para utilizar el proyecto de buscaminas:

1. Abre tu servidor web local con Laragon, XAMPP, MAMP, u otro de tu elección.
2. Una vez que el servidor esté en funcionamiento, coloca el proyecto en el directorio correspondiente (por ejemplo, en el directorio www de Laragon).
3. Abre tu navegador web y accede al proyecto local utilizando la URL proporcionada por tu servidor web (por ejemplo, http://localhost/TQS_project/src/).
4. Ahora podrás jugar al buscaminas abriendo el archivo index.php en tu navegador.
