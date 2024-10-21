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

## Tecnologías Utilizadas 🔧

### Node.js

-   **Descripción**: Entorno de ejecución de JavaScript del lado del servidor que permite crear aplicaciones de red escalables y rápidas. Node.js utiliza un modelo de I/O sin bloqueo y orientado a eventos que lo hace ideal para aplicaciones de alta concurrencia.

### Módulos de Node.js

-   **Filesystem (fs)**: Módulo que permite interactuar con el sistema de archivos, incluyendo la creación y manipulación de carpetas y archivos.
-   **Path**: Módulo utilizado para manejar y transformar rutas de archivos y directorios, lo que facilita la gestión de las rutas en proyectos complejos.

## Estructura de carpetas

### Node Js:

project-root/
│
├── app.js # Punto de entrada principal de la aplicación
├── .env # Variables de entorno
│
└── src/
├── routes/ # Puntos finales de la API (ej.: users.js, products.js)
│ └── users.js
├── controllers/ # Maneja la lógica de negocio (ej.: userController.js)
│ └── userController.js
├── models/ # Modelos y esquemas de base de datos
│ └── userModel.js
├── services/ # Integraciones de terceros (ej.: userService.js)
│ └── userService.js
├── utils/ # Funciones utilitarias y helpers
│ └── validateInput.js
├── middlewares/ # Autenticación, logging, manejo de errores
│ └── authMiddleware.js
└── tests/ # Pruebas unitarias e integración
└── user.test.js

### React Js:

src/
|-- components/ # Componentes reutilizables comunes
| |-- Avatar/ # Componente Avatar
| | |-- avatar.jsx
| | |-- avatar.css
| | |-- avatar.test.js
| |-- Button/ # Componente Botón
| | |-- button.jsx
| | |-- button.css
| | |-- button.test.js
| |-- TextField/ # Componente Campo de Texto
| | |-- TextField.jsx
| | |-- TextField.css
| | |-- TextField.test.js
|
|-- contexts/ # Gestión de estado global utilizando la API de Contexto de React
| |-- UserContext/
| | |-- UserContext.js
|
|-- hooks/ # Hooks reutilizables personalizados
| |-- useMediaQuery/
| | |-- useMediaQuery.js
| | |-- useMediaQuery.test.js # Pruebas unitarias opcionales para hooks personalizados
|
|-- features/ # Organización basada en características
| |-- Home/
| | |-- components/ # Componentes de usuario
| | | |-- SomeUserProfileComponent/
| | | | |-- SomeUserProfileComponent.jsx
| | | | |-- SomeUserProfileComponent.css
| | | | |-- SomeUserProfileComponent.test.js
| | |-- services/ # Servicios específicos de la característica
| | | |-- homeService.js
| | | |-- homeService.test.js
| | |-- hooks/ # Hooks personalizados específicos de la característica
| | | |-- useHomeData.js
| | | |-- useHomeData.test.js
| | |-- views/ # Componentes a nivel de vista o página
| | | |-- HomeView.jsx
| | |-- pages/ # Páginas, a menudo vinculadas a rutas
| | | |-- HomePage.jsx
| |-- index.js # Punto de entrada para la característica
|
|-- services/ # Servicios globales (API, etc.)
| |-- some-common-service/
| | |-- index.js # Lógica del servicio
| | |-- some-common-service.js
| | |-- index.test.js
|
|-- utils/ # Funciones utilitarias, helpers, etc.
| |-- some-common-util/
| | |-- index.js
| | |-- index.test.js
|
|-- styles/ # Estilos globales (opcional)
| |-- global.css # Estilos aplicables a toda la aplicación
| |-- variables.css # Variables globales para tematización
|
|-- App.jsx # Punto de entrada principal de la aplicación
|-- index.js # Inicialización de la aplicación y renderizado raíz
|-- routes.js # Enrutamiento centralizado para la aplicación (si se utiliza React Router)

### Integrador Hacking Etico:

project-root/
│
├── backend/ # Backend para manejar la lógica de hacking y API
│ ├── src/
│ │ ├── routes/
│ │ │ └── api.js # Rutas API para frontend y backend
│ │ ├── controllers/ # Controladores de ataques del Red Team (ej.: phishing)
│ │ │ └── attackController.js
│ │ ├── models/ # Base de datos para almacenar logs, objetivos
│ │ │ └── targetModel.js
│ │ ├── services/ # Scripts y servicios de ataque
│ │ │ └── phishingService.js # Ejemplo: Ataques de phishing
│ │ ├── utils/ # Utilidades auxiliares para ataques del Red Team
│ │ │ └── networkUtils.js # Ejemplo: Utilidades de escaneo de red
│ │ └── middlewares/ # Autenticación, logging, etc.
│ │ └── authMiddleware.js
│ ├── app.js # Punto de entrada del backend
│ ├── package.json # Dependencias del backend
│ ├── .env # Variables de entorno
│ └── node_modules/
│
├── frontend/ # Frontend de React.js
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── components/ # Componentes de React para la UI
│ │ │ └── AttackOverview.js # Resumen de ataques en curso
│ │ ├── hooks/ # Hooks personalizados para datos de ataque
│ │ ├── services/ # Servicios de frontend para obtener datos del backend
│ │ │ └── attackApiService.js # Obtención de datos de ataque (API)
│ │ ├── styles/ # CSS y diseño
│ │ └── App.js # Componente principal de la aplicación
│ └── package.json # Dependencias del frontend
│
├── red-team-scripts/ # Scripts ofensivos para ataques del Red Team
│ ├── phishing/ # Scripts de ataque de phishing
│ │ └── phishing.js # Ejemplo de ataque de phishing
│ ├── network-scan/ # Escaneo de red y reconocimiento
│ │ └── nmapScan.sh # Script que utiliza Nmap para reconocimiento
│ └── exploitations/ # Scripts de explotación
│ └── exploitVulnerability.js # Ejemplo de explotación de vulnerabilidad
│
├── security-logs/ # Logs de ataques y respuestas
│ └── logs.json # Almacena detalles de los registros de ataque
│
└── tests/ # Carpeta de pruebas
├── backend-tests/ # Pruebas para la lógica de ataque del backend
│ └── attackController.test.js
├── frontend-tests/ # Pruebas unitarias para componentes de React
│ └── AttackOverview.test.js
└── penetration-tests/ # Scripts de pruebas de penetración de seguridad
└── testPhishing.sh # Pruebas automatizadas de penetración

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
    git clone https://github.com/3eze3/make_structure_projects.git
    ```

2.  Navegar al directorio del proyecto:
    ```bash
    cd page
    ```
3.  Ejecutar el script con uno de los parámetros disponibles:

        ```bash
        node index.js -a # Para crear la estructura de un proyecto de aprendizaje
        node index.js -v # Para crear la estructura de un proyecto vanilla
        node index.js -n # Para crear la estructura de un proyecto REACT Js
        node index.js -r # Para crear la estructura de un proyecto NODE JS
        node index.js -i # Para crear la estructura de un proyecto Integrador con Hacking Etico
        ```
