# Backend para Gestión de Tareas

Bienvenido al backend de la aplicación **Gestión de Tareas**, una solución API RESTful diseñada para gestionar usuarios y tareas con un enfoque en simplicidad y eficiencia. Desarrollada con **Node.js**, **Express**, y **MongoDB**, esta API ofrece un sistema robusto y seguro.

## 🌐 Aplicación en Producción

Accede a la API desplegada en el siguiente enlace: [🔗 API en Producción](https://taskmanager-backend-production-b2f2.up.railway.app/)

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- **Node.js** (v16 o superior): Entorno de ejecución de JavaScript.
- **npm** (v7 o superior): Administrador de paquetes de Node.js.
- **MongoDB**: Base de datos, ya sea en tu entorno local o a través de una conexión remota.

---

## ⚙️ Instalación y Configuración

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el Repositorio
Clona el repositorio a tu máquina local y navega al directorio del proyecto:
```bash
git clone https://github.com/tu-usuario/tu-backend-repositorio.git
cd tu-backend-repositorio
```

### 2. Instalar las Dependencias
Ejecuta el siguiente comando para instalar las dependencias necesarias:
```bash
npm install
```

### 3. Configurar las Variables de Entorno
Crea un archivo `.env` en el directorio raíz del proyecto y configura las siguientes variables:
```
PORT=3000
MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/tu-base-de-datos
JWT_SECRET=tu-secreto-jwt
```
Asegúrate de reemplazar `<usuario>`, `<contraseña>`, y `tu-base-de-datos` con tus credenciales reales.

### 4. Ejecutar el Servidor de Desarrollo
Inicia el servidor en modo desarrollo con el siguiente comando:
```bash
node ./src/server.js
```
El servidor estará disponible en `http://localhost:3000`.

---

## 📚 Documentación de Endpoints

### Usuarios

#### **Registro de Usuarios**
- **POST** `/api/register`
- Permite registrar nuevos usuarios en la aplicación.
- **Body (JSON)**:
  ```json
  {
    "username": "Nombre del Usuario",
    "password": "contraseña"
  }
  ```

#### **Inicio de Sesión**
- **POST** `/api/login`
- Autentica al usuario y genera un token JWT.
- **Body (JSON)**:
  ```json
  {
    "username": "correo@dominio.com",
    "password": "contraseña"
  }
  ```

---

### Tareas

#### **Obtener Todas las Tareas**
- **GET** `/api/tasks`
- Recupera todas las tareas asociadas al usuario autenticado.

#### **Crear una Nueva Tarea**
- **POST** `/api/tasks`
- Permite crear una nueva tarea.
- **Body (JSON)**:
  ```json
  {
    "title": "Título de la Tarea",
    "description": "Descripción de la Tarea",
    "completed": "Estado de la Tarea"
  }
  ```

#### **Actualizar una Tarea**
- **PUT** `/api/tasks/:id`
- Actualiza los datos de una tarea existente.
- **Body (JSON)**:
  ```json
  {
    "title": "Nuevo Título",
    "description": "Nueva Descripción",
    "completed": "Estado de la Tarea"
  }
  ```

#### **Eliminar una Tarea**
- **DELETE** `/api/tasks/:id`
- Elimina una tarea específica.

### **Nota:** Todos los endpoints de tareas requieren autenticación mediante un token JWT.

---

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Plataforma para construir aplicaciones rápidas y escalables.
- **Express**: Framework minimalista y flexible para Node.js.
- **MongoDB**: Base de datos NoSQL orientada a documentos.
- **JWT**: Seguridad para la autenticación mediante tokens.
- **Swagger**: Herramienta para documentar y probar APIs.

---

## 📘 Documentación Interactiva con Swagger

La documentación interactiva de la API está disponible en el siguiente enlace:
[🔗 Swagger UI](https://taskmanager-backend-production-b2f2.up.railway.app/api-docs/)

Utiliza esta interfaz para explorar los endpoints, probar las funcionalidades y visualizar las especificaciones detalladas de la API.

---

## 🧪 Pruebas

El proyecto utiliza **Jest** como framework de pruebas. Sigue estos pasos para ejecutar las pruebas:

### Ejecutar las Pruebas
Ejecuta el siguiente comando para iniciar las pruebas:
```bash
npm test
```

---





