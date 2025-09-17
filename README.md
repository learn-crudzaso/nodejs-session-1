# Node.js Session 1 – Hands-on (Sep 12, 2025)

On **September 12, 2025**, a hands-on session on **Node.js** was held where we explored environment variables with dotenv, routes, controllers, models, and database configuration using Sequelize (MySQL).
This repo contains the session’s starting code and a minimal structure to keep routes/controllers/models clean and modular.

## Tech Stack

* Node.js + Express
* Sequelize (ORM) — MySQL
* dotenv for env management

## Project Structure

```
.
├─ src/
│  ├─ routes/
│  ├─ controllers/
│  ├─ models/
│  └─ config/
├─ public/
├─ .env.example
├─ package.json
└─ README.md
```

## Setup

### 1) Clone & Install

```bash
git clone https://github.com/learn-crudzaso/nodejs-session-1.git
cd nodejs-session-1
npm install
```

### 2) Environment Variables

Crea tu `.env` basándote en `.env.example`:

```env
# Database
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
DB_DIALECT=mysql

# App
PORT=3000
```

### 3) Database

* Crea la base de datos en MySQL (`your_database`).
* Asegúrate de que las credenciales del `.env` coincidan.
* (Opcional) Si tienes un script de sync/migrations, ejecútalo aquí.

## Run

Puedes iniciar el proyecto con:

```bash
node src/index.js
```

O bien, usando **nodemon** si lo tienes instalado:

```bash
npx nodemon src/index.js
```