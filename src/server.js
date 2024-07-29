require('dotenv').config();
const express = require('express');
const path = require('path');
const configviewEngine=require('./config/viewEngine');
const webRoutes = require('./routes/web');

//get the client
const mysql=require('mysql2');


//console.log(">>>check ENV:",process.env)

const app = express();
const port = process.env.PORT
const hostname=process.env.HOST_NAME

// Cấu hình template engine và đường dẫn views


//config template engine
configviewEngine(app);

//Khai bao route
app.use('/',webRoutes);

// Khai báo route để render template




//test connection
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port:3306,
  user: 'root',
  password:'Mungmung61.',
  database: 'mung_hoc_sql'
});

connection.query(
  'SELECT * FROM  User u ',
  function(err, results, fields) {
    console.log(">>>Result=",results); // results contains rows returned by server
    //console.log(">>>Fields=",fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port,hostname ,() => {
  console.log(`Example app listening on port ${port}`);
});
     