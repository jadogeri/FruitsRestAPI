const asyncHandler = require('express-async-handler');
//const User = require('../models/User.ts');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
/**
 * @description  Register 
 * @route GET /api/Fruit/
 * @access public
 */
/**
 * let token;
        let authHeader = req.headers.authorization || req.headers.Authorization;

       if(authHeader && authHeader.startsWith('Bearer')){
            token = authHeader.split(' ')[1];
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) =>{

                if(err){
                    res.status(401);
                    throw new Error("User is not authorized")
                }
                console.log(decoded);
                req.user = decoded.user;
                next();
            }); 
            if(!token){
                res.status(401);
                throw new Error("User is not authorize or token is missing in request");
            }
        }
 */
const getAllFruits = asyncHandler(async (req, res) => {

    try{    
        let authHeader = req.headers.authorization || req.headers.Authorization;
        console.log("autheader === ",authHeader)

    
        let token = res.locals.token;
        console.log("res token from header === ",token)
        let  {getConnection} = require("../../server");
        let database = getConnection();
        const fruits = database.get("fruits").value()
        res.json(fruits)

    
        // const registeredUser = allUsers.filter((user)=>{
        //     return user.username === username
        // })
    
    
       //console.log("token === ",token)
        // let accessToken = "";
        // if(registeredUser && (await bcrypt.compare(password, registeredUser.password))){
        //     accessToken = jwt.sign({
        //         user:{
        //             username : registeredUser.username,
        //             id: registeredUser.id,
        //         },
    
        //     } , "joseph123456789",{expiresIn : "2m"} );
        //     database.get("auth").find({username :username}).assign({token : accessToken}).write();
        //     res.status(200).json({accessToken})
        // }else{
        //     res.status(401);
        //     throw new Error('password or username not valid');
        // }
    
    }catch(e){console.log(e)}
    
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