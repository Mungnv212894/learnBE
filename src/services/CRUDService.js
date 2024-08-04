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
const updateUserbyId=async(email,city,name,userId)=>{
    let [results,fields]=await connection.query(
        `UPDATE User
        SET email = ?, city = ?, name = ?
        WHERE id = ?`,
        [email,city,name,userId]
    );

}
module.exports={
    getAllUsers,getUserById,
    updateUserbyId
}