require('dotenv').config();
const express = require('express');
const path = require('path');
const configviewEngine=require('./config/viewEngine');
const webRouter = require('./routes/web');



//console.log(">>>check ENV:",process.env)

const app = express();
const port = process.env.PORT
const hostname=process.env.HOST_NAME

// Cấu hình template engine và đường dẫn views


//config template engine
configviewEngine(app);

//Khai bao route
app.use('/test',webRouter);

// Khai báo route để render template


app.listen(port,hostname ,() => {
  console.log(`Example app listening on port ${port}`);
});
