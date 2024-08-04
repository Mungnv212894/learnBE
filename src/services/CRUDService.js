const connection=require("../config/database");

const getAllUsers=async()=>{
    let[results,fields]= await connection.query('select * from User');
    return results;
}
const getUserById=async(useId)=>{
    let [results,fields]=await connection.query('SELECT * FROM User where id=? ',[useId]);
    //console.log(">>>Results=",results);

    let user=results && results.length > 0 ? results[0]:{};
    return user;
}
module.exports={
    getAllUsers,getUserById
}