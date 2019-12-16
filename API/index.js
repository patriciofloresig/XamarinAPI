// Importamos las librerias necesarias
const express = require('express');
const app = express();
const pool = require('./data/config');

// Indicamos los middleware, funciones que se realizan cuando 
// el servidor recibe una peticion en la ruta especificada
app.get('/alumnos', (request, response) => {
    // En este caso lo que queremos es que nos devuelva el resultado 
    // de esa consulta SQL 
    pool.query('SELECT * FROM alumnos', (error, result) => {
        if (error) response.send(request.connection.remoteAddress + error.message);
        response.send(result);
    });
});

app.get('/alumnos/:id', (request, response) => {
    // En este caso lo que queremos es que nos devuelva el resultado 
    // de esa consulta SQL 
    pool.query(`SELECT * FROM alumnos WHERE id = '${request.params.id}'`, (error, result) => {
        if (error) response.send(error.message);
        response.send(result);
    });
});

app.get('/alumnos/delete/:id', (request, response) => {
    // En este caso lo que queremos es que nos devuelva el resultado 
    // de esa consulta SQL 
    pool.query('DELETE FROM alumnos WHERE id = ' +  request.params.id, (error, result) => {
        if (error) response.send("ERROR");
        response.send(result);
    });
});

app.post('/alumnos/insert?nombre=:nombre&apellido=:apellido&clase=:clase', (request, response) => {
    // En este caso lo que queremos es que nos devuelva el resultado 
    // de esa consulta SQL 
    pool.query(`INSERT INTO alumnos (Nombre, Apeliido, Clase) VALUES ('${request.params.nombre}', '${request.params.apellido}', '${request.params.clase}')`, (error, result) => {
        if (error) response.send("ERROR");
        response.send(result);
    });
});

// Finalmente iniciamos el servidor y le decimos que
// escuche por el puerto 3000
app.listen(80);