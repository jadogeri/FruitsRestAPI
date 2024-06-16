const asyncHandler = require('express-async-handler');
//const User = require('../models/User.ts');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
/**
 * @description  Register 
 * @route GET /api/Fruit/
 * @access public
 */

const getAllFruits = asyncHandler(async (req, res) => {

    try{
        const {token} = req.body
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
    
            } , "joseph123456789",{expiresIn : "2m"} );
            database.get("auth").find({username :username}).assign({token : accessToken}).write();
            res.status(200).json({accessToken})
        }else{
            res.status(401);
            throw new Error('password or username not valid');
        }
    
    }catch(e){console.log(e)}
        res.json({ message: 'login the client'})
    
    // const {username,password,email} = req.body;

    // if(!username||!password||!email){
    //     res.status(400) //.json({message:"all fields must be filled"})
    //     throw new Error('All fields are mandatory');
        
    // }
    
    // const userAvailable = await User.findOne({email});
    // if(userAvailable){
    //     res.status(400) //.json({message:"all fields must be filled"})
    //     throw new Error(`email already registered`);
    // }

    //  //hash the password 
    // const hashedPassword = await bcrypt.hash(password,5);
    // console.log("hashed password ",hashedPassword);

    // const user = await User.create({username,password:hashedPassword,email})
    // res.status(201).json(user)
    // if(user){
    //     res.status(201).json({_id: user.id, username: user.username, email: user.email})
    // }else{
    //     res.status(400);
    //     throw new Error('User data is not valid')
    // }
res.json({ message: 'Get all fruits'})

  
});


/**
 * @description Get a single Fruit 
 * @route GET /api/fruit/:id
 * @access public
 */

const getFruit = asyncHandler(async (req, res) => {

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
    res.json({ message: 'get fruit'})

});


module.exports = {getFruit, getAllFruits}