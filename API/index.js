// Importamos las librerias necesarias
const express = require('express');
const app = express();
const pool = require('./data/config');

// Indicamos los middleware, funciones que se realizan cuando 
// el servidor recibe una peticion en la ruta especificada
app.get('/servers', (request, response) => {
    // En este caso lo que queremos es que nos devuelva el resultado 
    // de esa consulta SQL 
    pool.query('SELECT * FROM servers', (error, result) => {
        if (error) console.log(request.connection.remoteAddress + error.message);
        response.send(result);
    });
});
// Finalmente iniciamos el servidor y le decimos que
// escuche por el puerto 3000
app.listen(3000);