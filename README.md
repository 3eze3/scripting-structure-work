# Título: Automatización de Estructuras de Proyectos con Node.js

## Descripción:

Este proyecto tiene como objetivo crear un script en Node.js que automatiza la estructura de archivos y carpetas para diferentes tipos de proyectos. Con este script, podrás:

-   **Agilizar el flujo de trabajo**: Reduce el tiempo dedicado a crear manualmente las carpetas y archivos necesarios para nuevos proyectos.
-   **Estandarizar estructuras**: Asegura que cada nuevo proyecto siga una estructura predefinida y coherente.
-   **Facilitar la organización**: Mantiene todos tus archivos y carpetas organizados de manera eficiente.

## Objetivos Personales:

-   [ ] Aprender a utilizar Node.js para la manipulación de archivos y carpetas.
-   [ ] Desarrollar un script funcional que sirva como base para futuros proyectos.
-   [ ] Mejorar la eficiencia en la creación de nuevos proyectos personales.
-   [ ] Documentar el proceso y las lecciones aprendidas para compartir con la comunidad.
-   [ ] Investigar sobre mejores prácticas en la estructuración de proyectos en Node.js y React.js.

## Archivos Templates:

Para poder poner tus propios archivos, en el script ya encontrarás la carpeta Template si la quieres usar, o puedes crear tu propia carpeta. **Lo importante es:** que en el archivo de rutas pongas las rutas absolutas de tus archivos; de esa forma no tendrás conflicto con el path.

## Tecnologías Utilizadas 🔧

### Node.js

-   **Descripción**: Entorno de ejecución de JavaScript del lado del servidor que permite crear aplicaciones de red escalables y rápidas. Node.js utiliza un modelo de I/O sin bloqueo y orientado a eventos que lo hace ideal para aplicaciones de alta concurrencia.

### Módulos de Node.js

-   **Filesystem (fs)**: Módulo que permite interactuar con el sistema de archivos, incluyendo la creación y manipulación de carpetas y archivos.
-   **Path**: Módulo utilizado para manejar y transformar rutas de archivos y directorios, lo que facilita la gestión de las rutas en proyectos complejos.

## Ejemplos de Configuración de Archivos

```js
import { createProjectStructure } from "../utils/common.mjs"

const files = {}

function setFileName(root) {
	files[root] = [
		"img",
		"html",
		"html/index.html",
		"css",
		"css/style.css",
		"js",
		"js/main.js",
		"README.md",
	]
}

export async function aprendizaje() {
	await createProjectStructure(files, setFileName)
}
```

```js
import { createProjectStructure } from "../utils/common.mjs"

const files = {}

function setFileName(root) {
	files[root] = [
		"app.js",
		".env",
		"src",
		"src/routes",
		"src/routes/users.js",
		"src/controller",
		"src/controller/userController.js",
		"src/models",
		"src/models/userModel.js",
		"src/services",
		"src/services/userServices.js",
		"src/utils",
		"src/utils/validateInput.js",
		"src/middlewares",
		"src/middlewares/authMiddleware.js",
		"src/tests",
		"src/tests/user.test.js",
	]
}

export async function node() {
	await createProjectStructure(files, setFileName)
}
```

## Instalación y Uso 🔌

### Pasos para ejecutar el script:

1.  **Clonar el repositorio**:

    ```bash
    git clone https://github.com/3eze3/scripting-structure-work.git
    ```

2.  Navegar al directorio del proyecto:
    ```bash
    cd scripting-structure-work/
    ```
3.  Ejecutar el script con uno de los parámetros disponibles:

    ```bash
        node index.js -a # Para crear la estructura de un proyecto de aprendizaje
    ```

    ```bash
        node index.js -v # Para crear la estructura de un proyecto vanilla
    ```

    ```bash
        node index.js -n # Para crear la estructura de un proyecto REACT Js
    ```

    ```bash
        node index.js -r # Para crear la estructura de un proyecto NODE JS
    ```

    ```bash
        node index.js -i # Para crear la estructura de un proyecto Integrador con Hacking Etico
    ```
