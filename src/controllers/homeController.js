const connection=require('../config/database');


const getHomePage = (req, res) => {
    //res.send('Xin chào thế giới');
    //process. data
    //call model
    return  res.render('home.ejs')
      
};

const getABC = (req, res) => {
    res.send('Check ABC');
};

const viduEJS = (req, res) => {
    res.render('sample'); // Đảm bảo bạn có file 'sample.ejs' trong thư mục views
};

const postCreateUser=(req,res)=>{
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    //res.send('Create a new user')
    connection.query(
        `INSERT INTO User (email,name,city) 
        VALUE(?,?,?);`,
        [email,name,city],
        function(err,results){
            console.log(results);
            res.send('Create a new user');
        }
    );
}

module.exports = {
    getHomePage, getABC, viduEJS,postCreateUser
};
