# Instituto IDAT

## Curso: Desarrollo de Interfaces 3

### Profesor: Jesús Paul Ventura Acero

### Alumno: Jorge Abraham Cueto Elías

---

# Sistema Web para Gestión de Clínica Veterinaria

## 🩺 Descripción General

El presente proyecto consiste en el desarrollo de un **sistema web integral para la gestión de una clínica veterinaria**, denominado **Vet Panchito**. Este sistema permite administrar información relacionada con pacientes (mascotas), dueños, médicos veterinarios y citas, optimizando los procesos internos y mejorando la atención al cliente.

El proyecto está dividido en dos componentes principales:

* **Backend:** Desarrollado en **Spring Boot (Java)** para la gestión de datos, lógica de negocio y conexión con la base de datos.
* **Frontend:** Construido con **Angular**, encargado de la interfaz visual y la interacción con el usuario.

---

## 🎯 Objetivo del Proyecto

Diseñar y desarrollar una aplicación web funcional que facilite la **gestión de los servicios de una clínica veterinaria**, permitiendo registrar, consultar y administrar información relevante de manera eficiente.

---

## ⚙️ Tecnologías Utilizadas

### Backend (Carpeta: `backend_veterinaria/panchito`)

* **Lenguaje:** Java 17+
* **Framework:** Spring Boot
* **Dependencias:** Maven
* **Base de datos:** MySQL
* **Herramientas:** IntelliJ IDEA / Eclipse / Postman

### Frontend (Carpeta: `vet_panchito`)

* **Framework:** Angular 17+
* **Lenguaje:** TypeScript
* **Gestor de paquetes:** npm
* **Entorno de desarrollo:** Visual Studio Code

---

## 🗂️ Estructura del Proyecto

```
Examen_Parcial_JorgeAbrahamCuetoElias/
├── backend_veterinaria/
│   └── panchito/ (Proyecto Spring Boot)
│
├── vet_panchito/ (Proyecto Angular)
│
└── README.md
```

---

## 🚀 Instrucciones de Instalación y Uso

### 🔧 Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

* **Java JDK 17 o superior**
* **Maven 3+**
* **MySQL Server 8+**
* **Node.js 18+ y npm**
* **Angular CLI** (instalar con `npm install -g @angular/cli`)

---

### 🖥️ Ejecución del Backend

1. Abre la carpeta `backend_veterinaria/panchito` en tu IDE (IntelliJ o Eclipse).
2. Configura el archivo `application.properties` con tus credenciales de MySQL:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/veterinaria
   spring.datasource.username=root
   spring.datasource.password=
   # Cambiar usuario y contraseña según la configuración de tu MySQL local
   ```
3. Ejecuta el proyecto con el comando:

   ```bash
   mvn spring-boot:run
   ```
4. El backend se iniciará en `http://localhost:8080`.

---

### 🌐 Ejecución del Frontend

1. Abre la carpeta `vet_panchito` en Visual Studio Code.
2. Instala las dependencias con:

   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:

   ```bash
   ng serve
   ```
4. Abre el navegador en `http://localhost:4200`.

---

## 🧩 Funcionalidades Principales

* Registro, edición y eliminación de mascotas.
* Gestión de dueños y veterinarios.
* Programación de citas.
* Conexión en tiempo real con la base de datos.
* Interfaz moderna e intuitiva desarrollada en Angular.

---

## 🧪 Generar usuarios con Postman (Creación de Usuarios)

Por el momento los usuarios solo se podran crear desde Postman.

Para probar el registro de usuarios desde Postman, sigue los siguientes pasos:

1. Abre **Postman** y crea una nueva solicitud (**Request**).
2. Selecciona el método **POST**.
3. En la barra de dirección, escribe el endpoint:

   ```
   http://localhost:8080/api/auth/register
   ```
4. En la pestaña **Body**, selecciona la opción **raw** y el tipo **JSON**.
5. Ingresa un cuerpo de ejemplo como este:

   ```json
   {
     "usuario": "cgomez1",
     "clave": "123456",
     "nombre": "Carlos Gomez",
     "rol": "Soporte IT"
   }
   ```
6. Haz clic en **Send** para enviar la petición.

### 🟢 Respuesta Exitosa (Ejemplo)

```json
{
  "id": 6,
  "usuario": "cgomez1",
  "clave": "123456",
  "rol": "Soporte IT",
}
```

### ⚠️ Notas Importantes

* Asegúrate de que el backend esté corriendo en el puerto **8080** antes de hacer la petición.
* Si usas otro puerto o nombre de endpoint, actualiza la URL en Postman.

---

## 📄 Licencia y Créditos

Proyecto académico desarrollado por **Jorge Abraham Cueto Elías** para el curso **Desarrollo de Interfaces 3** del **Instituto IDAT**, bajo la supervisión del profesor **Jesús Paul Ventura Acero**.
