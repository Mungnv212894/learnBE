require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // Corrected property name
    database: process.env.DB_NAME
});


// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD, // Corrected property name
//     database: process.env.DB_NAME,
//     connectionLimit: 10, // Maximum number of connections allowed
//     waitForConnections: true, // Wait for a connection before creating a new one
//     queueLimit: 0 // Maximum number of queued connections

// });

module.exports = connection;
