require('dotenv').config();
const express = require('express');
const path = require('path');
const configviewEngine=require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

//get the client



//console.log(">>>check ENV:",process.env)

const app = express();
const port = process.env.PORT
const hostname=process.env.HOST_NAME

// Cấu hình template engine và đường dẫn views

//conffig req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //for form data


//config template engine
configviewEngine(app);

//Khai bao route
app.use('/',webRoutes);

// Khai báo route để render template
//test connection
// create the connection to database

// connection.query(
//   'SELECT * FROM  User u ',
//   function(err, results, fields) {
//     console.log(">>>Result=",results); // results contains rows returned by server
//     //console.log(">>>Fields=",fields); // fields contains extra meta data about results, if available
//   }
// );

app.listen(port,hostname ,() => {
  console.log(`Example app listening on port ${port}`);
});
     