const asyncHandler = require('express-async-handler');
//const User = require('../models/User.ts');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
/**
 * @description Get Register 
 * @route PUT /api/User/register
 * @access public
 */

const registerUser = asyncHandler(async (req, res) => {
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
res.json({ message: 'Register the user'})

  
});


/**
 * @description Login a User
 * @route PUT /api/user/login
 * @access public
 */

const loginUser = asyncHandler(async (req, res) => {

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
    res.json({ message: 'login the client'})

});

/**
 * @description Logout a User
 * @route PUT /api/user/logout
 * @access public
 */


const logoutUser = asyncHandler(async (req, res) => {

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
    res.json({ message: 'logout the client'})

});



module.exports = {registerUser, loginUser, logoutUser}