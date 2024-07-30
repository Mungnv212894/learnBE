const connection=require('../config/database');


const getHomePage = (req, res) => {
    //res.send('Xin chào thế giới');
    //process. data
    //call model
    let user=[];

    connection.query(
        'SELECT * FROM  User u ',
        function(err, results, fields) {
          user=results;
          console.log(">>>Result=",results); // results contains rows returned by server
          //console.log(">>>Fields=",fields); // fields contains extra meta data about results, if available
          console.log(">>>User=",user);
          res.send(JSON.stringify(user));
        }
      );
};

const getABC = (req, res) => {
    res.send('Check ABC');
};

const viduEJS = (req, res) => {
    res.render('sample'); // Đảm bảo bạn có file 'sample.ejs' trong thư mục views
};

module.exports = {
    getHomePage, getABC, viduEJS
};
