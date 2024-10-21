# Título: Automatización de Estructuras de Proyectos con Node.js

## Descripción:

Este proyecto tiene como objetivo crear un script en Node.js que automatiza la estructura de archivos y carpetas para diferentes tipos de proyectos. Con este script, podrás:

-   **Agilizar el flujo de trabajo**: Reduce el tiempo dedicado a crear manualmente las carpetas y archivos necesarios para nuevos proyectos.
-   **Estandarizar estructuras**: Asegura que cada nuevo proyecto siga una estructura predefinida y coherente.
-   **Facilitar la organización**: Mantiene todos tus archivos y carpetas organizados de manera eficiente.

## Estructura de carptas

### Node Js:

project-root/
│
├── app.js # Main application entry point
├── .env # Environment variables
├── package.json # Project dependencies and scripts
├── node_modules/ # Installed dependencies
│
└── src/
├── routes/ # API endpoints (e.g., users.js, products.js)
│ └── users.js
├── controllers/ # Handles business logic (e.g., userController.js)
│ └── userController.js
├── models/ # Database models and schemas
│ └── userModel.js
├── services/ # Third-party integrations (e.g., userService.js)
│ └── userService.js
├── utils/ # Utility and helper functions
│ └── validateInput.js
├── middlewares/ # Authentication, logging, error handling
│ └── authMiddleware.js
└── tests/ # Unit and integration tests
└── user.test.js

### REACT Js:

project-root/
│
├── public/ # Public assets like index.html
│ └── index.html
├── src/
│ ├── components/ # React components
│ │ └── Navbar.js
│ ├── hooks/ # Custom hooks (optional)
│ │ └── useAuth.js
│ ├── services/ # API calls or logic (optional)
│ │ └── apiService.js
│ ├── styles/ # CSS or styled-components
│ │ └── Navbar.css
│ ├── App.js # Main app component
│ └── index.js # App entry point
│
├── package.json # Project dependencies and scripts
└── node_modules/ # Installed dependencies

### Integrador con Hacking Etico :

project-root/
│
├── backend/ # Backend for handling hacking logic and API
│ ├── src/
│ │ ├── routes/
│ │ │ └── api.js # API routes for both frontend and backend
│ │ ├── controllers/ # Red team attack controllers (e.g., phishing)
│ │ │ └── attackController.js
│ │ ├── models/ # Database for storing logs, targets
│ │ │ └── targetModel.js
│ │ ├── services/ # Attack scripts and services
│ │ │ └── phishingService.js # Example: Phishing attacks
│ │ ├── utils/ # Helper utilities for Red Team attacks
│ │ │ └── networkUtils.js # Example: Network scanning utilities
│ │ └── middlewares/ # Authentication, logging, etc.
│ │ └── authMiddleware.js
│ ├── app.js # Backend entry point
│ ├── package.json # Backend dependencies
│ ├── .env # Environment variables
│ └── node_modules/
│
├── frontend/ # React.js frontend
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── components/ # React components for UI
│ │ │ └── AttackOverview.js # Overview of ongoing attacks
│ │ ├── hooks/ # Custom hooks for attack data
│ │ ├── services/ # Frontend services to fetch data from backend
│ │ │ └── attackApiService.js # Fetching attack data (API)
│ │ ├── styles/ # CSS and design
│ │ └── App.js # Main app component
│ └── package.json # Frontend dependencies
│
├── red-team-scripts/ # Offensive scripts for Red Team attacks
│ ├── phishing/ # Phishing attack scripts
│ │ └── phishing.js # Sample phishing attack
│ ├── network-scan/ # Network scanning and reconnaissance
│ │ └── nmapScan.sh # Script using Nmap for recon
│ └── exploitations/ # Exploit scripts
│ └── exploitVulnerability.js # Example of vulnerability exploitation
│
├── security-logs/ # Logs of attacks and responses
│ └── logs.json # Store logs of attack details
│
└── tests/ # Testing folder
├── backend-tests/ # Tests for backend attack logic
│ └── attackController.test.js
├── frontend-tests/ # Unit tests for React components
│ └── AttackOverview.test.js
└── penetration-tests/ # Security penetration testing scripts
└── testPhishing.sh # Automated penetration tests

## Objetivos Personales:

-   [ ] Aprender a utilizar Node.js para la manipulación de archivos y carpetas.
-   [ ] Desarrollar un script funcional que sirva como base para futuros proyectos.
-   [ ] Mejorar la eficiencia en la creación de nuevos proyectos personales.
-   [ ] Documentar el proceso y las lecciones aprendidas para compartir con la comunidad.

## Tecnologías 🔧

**Node.js**:

-   Entorno de ejecución de JavaScript del lado del servidor que permite crear aplicaciones de red escalables.

**Filesystem (fs)**:

-   Módulo de Node.js que permite interactuar con el sistema de archivos, incluyendo la creación de carpetas y archivos.

**Path**:

-   Módulo de Node.js utilizado para manejar y transformar rutas de archivos y directorios.

## Instalación y Uso 🔌

1. Clona el repositorio:

```bash
   git clone https://github.com/3eze3/page.git
```

2. Navega al directorio del proyecto:

```bash
    cd page
```

3. Ejecuta el script con uno de los parámetros disponibles:

```bash
    node index.js -a  # Para crear la estructura de un proyecto de aprendizaje
    node index.js -v  # Para crear la estructura de un proyecto vanilla
```
