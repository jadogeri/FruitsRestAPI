const asyncHandler = require('express-async-handler');
//const User = require('../models/User.ts');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * @description Post Register 
 * @route POST /api/User/register
 * @access public
 */

const registerUser = asyncHandler(async (req, res) => {
     
       
    //let database =  JSON.parse(localStorage.getItem("database"));
   // console.log(typeof database, database)
    const {username,password,confirm_password,nickname} =  req.body;

    if(!username||!password||!confirm_password){
        res.status(400) //.json({message:"all fields must be filled"})
        throw new Error('username, password and confirm password fields are mandatory')        
    }
    if(password !== confirm_password){
        res.status(400) //.json({message:"all fields must be filled"})
        throw new Error('both passwords must match');
    }

    let  {getConnection} = require("../../server");
    let database = getConnection();
    
    const allUsers =  database.get("users").value();
    const r = allUsers.filter((user)=>{
        return user.username === username
    })

    if(r.length !== 0){
        res.status(400)
        throw new Error('username already in table');
    }
    
    const hashedPassword = await bcrypt.hash(password,5);

     let client =  { id: "4", username: username, password : hashedPassword ,nickname : nickname, fruits : []}
     let result =  database.get('users').push( client).write();
     database.get("auth").push({username :username,token:"",expiresIn : ""}).write()
     //database.get("users").remove().write();  database.get("auth").remove().write();
     console.log(JSON.stringify(result))
     res.json(client);
      
});


/**
 * @description Login a User
 * @route POST /api/user/login
 * @access public
 */

const loginUser = asyncHandler(async (req, res) => {
    try{
    const {password,username,nickname} = req.body
    if(!password && (!username || nickname)){
        res.status(404);
        throw new Error('All fields are mandatory')
    }

    let  {getConnection} = require("../../server");
    let database = getConnection();
    //const allUsers = database.get("users").value()

    // const registeredUser = allUsers.filter((user)=>{
    //     return user.username === username
    // })

    const registeredUser = database.get("users").find({username : username}).value();

   
    let accessToken = "";
    if(registeredUser && (await bcrypt.compare(password, registeredUser.password))){
        accessToken = jwt.sign({
            user:{
                username : registeredUser.username,
                id: registeredUser.id,
            },

        } , "joseph123456789",{expiresIn : "50m"} );
        database.get("auth").find({username :username}).assign({token : accessToken}).write();
        res.status(200).json({accessToken})
    }else{
        res.status(401);
        throw new Error('password or username not valid');
    }

}catch(e){console.log(e)}
    res.json({ message: 'login the client'})

});

/**
 * @description Logout a User
 * @route PUT /api/user/logout
 * @access public
 */


const logoutUser = asyncHandler(async (req, res) => {
try{

    const {tokenExpired} = require("../utils/tokenExpired")
    const {username, token} = req.body
    if(!username || !token){
        res.status(404);
        throw new Error('fields token and username are mandatory')
    }

    let  {getConnection} = require("../../server");
    let database = getConnection();
    const registeredUser =  database.get("auth").find({username : username}).value();
    // const r = allUsers.filter((user)=>{
    //     return user.username === username
    // })

    if(registeredUser.length === 0){
        res.status(400)
        throw new Error('username does not exist in table');
    }
    if(registeredUser.token !== token){
        res.status(400)
        throw new Error('token is invaild');

    }

    if(tokenExpired(token)){
        res.status(400)
        throw new Error('token has expired');

    }

    const result = database.get("auth").find({username :username}).assign({token : ""}).write();
    res.json(result)

    // const user = await User.findOne({ email });
    // if(user && (await bcrypt.compare(password, user.password))){
    //     const accessToken = jwt.sign({
    //         user:{
    //             username : user.username,
    //             email : user.email,
    //             id: user.id,
    //         },

    //     } , process.env.ACCESS_TOKEN_SECRET,{expiresIn : "15m"} );
    //     res.status(200).json({accessToken})
    // }else{
    //     res.status(401);
    //     throw new Error('password or email not valid');
    // }
}catch(e){console.log(e)}

});

/**
 * @description Logout a User
 * @route PUT /api/user/logout
 * @access public
 */


const resetUser = asyncHandler(async (req, res) => {

    // const {email, password,username} = req.body
    // if(!password && (!username || !email)){
    //     res.status(404);
    //     throw new Error('All fields are mandatory')
    // }
    // const user = await User.findOne({ email });
    // if(user && (await bcrypt.compare(password, user.password))){
    //     const accessToken = jwt.sign({
    //         user:{
    //             username : user.username,
    //             email : user.email,
    //             id: user.id,
    //         },

    //     } , process.env.ACCESS_TOKEN_SECRET,{expiresIn : "15m"} );
    //     res.status(200).json({accessToken})
    // }else{
    //     res.status(401);
    //     throw new Error('password or email not valid');
    // }
    res.json({ message: 'reset the client'})

});


module.exports = {registerUser, loginUser, logoutUser, resetUser}