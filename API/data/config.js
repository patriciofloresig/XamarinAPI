// Importamos la libreria mysql
const mysql = require('mysql');

// Configuramos un objeto con los datos de 
// configuracion de la base de datos
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ig',
};

// Creamos una piscina de peticiones
// Esto nos permite realizar de forma asincrona 
// peticiones a la base de datos
const pool = mysql.createPool(config);
module.exports = pool;