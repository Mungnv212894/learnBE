const connection=require('../config/database');
const { use } = require('../routes/web');
const {getAllUsers,getUserById,updateUserbyId, deleteUserById}=require('../services/CRUDService');

const getHomePage = async(req, res) => {
    //res.send('Xin chào thế giới');
    //process. data
    //call model
    
    //console.log(">>>Results:",results);
    let results= await getAllUsers();
    return  res.render('home.ejs',{listUsers:results})
      
};

const getABC = (req, res) => {
    res.send('Check ABC');
};

const viduEJS = (req, res) => {
    res.render('sample'); // Đảm bảo bạn có file 'sample.ejs' trong thư mục views
};

const postCreateUser= async(req,res)=>{
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    //res.send('Create a new user')
    // connection.query(
    //     `INSERT INTO User (email,name,city) 
    //     VALUE(?,?,?);`,
    //     [email,name,city],
    //     function(err,results){
    //         console.log(results);
    //         res.send('Create a new user successfully');
    //     }
    // );
    let[results,fields]=await connection.query(
        `INSERT INTO User (email,name,city) 
        VALUE(?,?,?);`,
        [email,name,city]
    );

    console.log(">>>Results=",results);
    res.send('Create a new user successfully');

//   connection.query(
//   'SELECT * FROM  User u ',
//   function(err, results, fields) {
//     console.log(">>>Result=",results); // results contains rows returned by server
//     //console.log(">>>Fields=",fields); // fields contains extra meta data about results, if available
//   }
// );



  //const [results,fields]=await connection.query('SELECT * FROM  User u ');
 //console.log(">>>Results=",results);
}

const getCreatePage=(req,res)=>{
     res.render('create.ejs')
}
const getUpdatePage=async(req,res)=>{
    const useId=req.params.id;
    let user=await getUserById(useId);
   

    
    res.render('edit.ejs',{userEdit:user})//x<-y
}
const postUpdateUser=async(req,res)=>{
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId=req.body.userId;


    await updateUserbyId(email,city,name,userId);
    

    //console.log(">>>Results=",results);
    //res.send('Update a new user successfully');
    res.redirect('/');

//   



  //const [results,fields]=await connection.query('SELECT * FROM  User u ');
 //console.log(">>>Results=",results);
}
const postDeleteUser=async(req,res)=>{
    const useId=req.params.id;
    let user=await getUserById(useId);
    res.render('delete.ejs',{userEdit:user})
    //res.send('Delete a user successfully');
}
const postHandleRemoveUser=async(req,res)=>{
    const id=req.body.userId;
    await deleteUserById(id);
    res.redirect('/');
}
module.exports = {
    getHomePage, getABC, viduEJS,postCreateUser,getCreatePage,
    getUpdatePage,postUpdateUser,postDeleteUser,postHandleRemoveUser
};
