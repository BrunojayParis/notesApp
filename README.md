# Post Manager

Challenge de desarrollo de aplicación en React con backend en NodeJS, Base de datos postgreSQL

## Instalación :wrench:

### Requerimientos Previos :nut_and_bolt:

1. Instalar Node, [Descargar NodeJs](https://nodejs.org/es/)

2. Instalar postgresql, [Descargar postgresql](https://www.postgresql.org/download/).
3. Clonar este repositorio. 

```bash
git clone https://github.com/BrunojayParis/notesApp.git
```

### Setup :hammer:

1. Ir a la carpeta del repositorio en tu computadora.

2. Abrir un terminal en la carpeta del repo.

3. Node-modules.

```bash
npm install
```
4. Instalar dependencias.

```bash
npm i express morgan cors pg 
```
5. Crear una base de datos en postgreSQL 

```bash
CREATE DATABASE postsdb;

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    postname VARCHAR(255) UNIQUE,
    postdescription VARCHAR(255)
);
```
6. completar los datos de la DB en \src\database.js

## Run

Para correr el Back-end
```bash
npm start
```
Para correr el Front-end
```bash
cd frontend
npm start
```
