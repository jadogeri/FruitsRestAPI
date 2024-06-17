const asyncHandler = require('express-async-handler');
//const User = require('../models/User.ts');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * @description Add fruit to the client
 * @route POST /api/client/addfruit
 * @access private
 */

const addFruitToClient = asyncHandler(async (req, res) => {

    try{
        const {id} = req.body;

        if(!id){
            res.status(400)
            throw new Error('id field is mandatory');        
        }
        let authHeader = req.headers.authorization || req.headers.Authorization;
        console.log("autheader === ",authHeader)
    
        let token = res.locals.token;
        console.log("res token from header === ",token)

        let  {getConnection} = require("../../server");
        let database = getConnection();

        //find user in auth associated with the token
        const authUser = database.get("auth").find({token : token}).value();
        console.log("auth user === ",JSON.stringify(authUser))
        if(!authUser){
            res.status(400) //.json({message:"all fields must be filled"})
            throw new Error(`no user accociated with token`);
        }
        //use id to find fruit from fruits table
        const fruit = database.get("fruits").find({id : id}).value();
        if(!fruit){
            res.status(400) //.json({message:"all fields must be filled"})
            throw new Error(`no fruit accociated with id`);
        }

        const {username : authUsername} = authUser
        console.log("username in auth === ",authUsername)
        const user = database.get("users").find({username : authUsername}).value();
        console.log("user in users table === ",JSON.stringify(user))
        const {fruits} = user;

        //if user has fruit abort else add fruit to user
        const fruitFound = fruits.filter((item)=>{
            return fruit.id === item.id
        })

        if(fruitFound.length >=1){
            res.status(400) //.json({message:"all fields must be filled"})
            throw new Error(`fruit with id ${id} already added`);
        }
        //add new fruit to fruits array
        fruits.push(fruit);

        //add fruit to user
        const result = database.get("users").find({username : user.username})
        .assign({fruits : fruits}).write();

         res.json(result)
    }catch(e){
        console.log(e)
    }
   
res.json({ message: 'Added fruit to the client'})

  
});


/**
 * @description get all fruits from client
 * @route GET /api/client/getfruits
 * @access private
 */

const getFruitsFromClient = asyncHandler(async (req, res) => {

    try{    
        let authHeader = req.headers.authorization || req.headers.Authorization;
        console.log("autheader === ",authHeader)
    
        let token = res.locals.token;
        console.log("res token from header === ",token)

        let  {getConnection} = require("../../server");
        let database = getConnection();

        //find user in auth associated with the token
        const authUser = database.get("auth").find({token : token}).value();
        console.log("auth user === ",JSON.stringify(authUser))
        if(!authUser){
            res.status(400) //.json({message:"all fields must be filled"})
            throw new Error(`no user accociated with token`);
        }

        const { username : authUsername } = authUser;
        // get user where the name in auth is the same in users table
        const user = database.get("users").find({username : authUsername}).value();
        const {fruits} = user;

        res.json(fruits)

    }catch(e){console.log(e)}    
      

    res.json({ message: 'get all fruits from the client'})

});

/**
 * @description Get a single fruit from client
 * @route GET /api/client/getfruit/:id
 * @access private
 */


const getFruitFromClient = asyncHandler(async (req, res) => {

    try{
    const {id} = req.params;

    if(!id){
        res.status(400)
        throw new Error('id field is mandatory');        
    }
    let authHeader = req.headers.authorization || req.headers.Authorization;
    console.log("autheader === ",authHeader)

    let token = res.locals.token;
    console.log("res token from header === ",token)

    let  {getConnection} = require("../../server");
    let database = getConnection();

    //find user in auth associated with the token
    const authUser = database.get("auth").find({token : token}).value();
    console.log("auth user === ",JSON.stringify(authUser))
    if(!authUser){
        res.status(400) //.json({message:"all fields must be filled"})
        throw new Error(`no user accociated with token`);
    }
    //use id to find fruit from fruits table
    const fruits = database.get("fruits").value();
    console.log("fruit in fruits table === ",JSON.stringify(fruits));
    const fruit = fruits.map((item)=>{
        return item.id == id
    })
    if(!fruit){
        res.status(400) //.json({message:"all fields must be filled"})
        throw new Error(`no fruit in database accociated with id ${id}`);
    }

    const {username : authUsername} = authUser
    console.log("username in auth === ",authUsername)
    const user = database.get("users").find({username : authUsername}).value();
    console.log("user in users table === ",JSON.stringify(user))
    const {fruits : userFruits} = user;
    console.log("user fruits === ",JSON.stringify(userFruits))

    //if user has fruit abort else add fruit to user
    const fruitFound = userFruits.filter((item)=>{
        if(id == item.id){
            return item;
        }
    })
    console.log("fruit found length === ",fruitFound.length)
    console.log("fruit found ===",JSON.stringify(fruitFound))

    if(fruitFound.length === 0){
        res.status(400) //.json({message:"all fields must be filled"})
        throw new Error(`fruit with id ${id} not in ${user.username}'s list`);
    }    

     res.json(fruitFound)
}catch(e){console.log(e)}

    res.json({ message: 'get single fruit from the client'})

});

/**
 * @description Remove single fruit from client 
 * @route DELETE /api/client/removefruit/:id
 * @access private
 */


const removeFruitFromClient = asyncHandler(async (req, res) => {

    try{
        const {id} = req.params;
    
        if(!id){
            res.status(400)
            throw new Error('id field is mandatory');        
        }
        let authHeader = req.headers.authorization || req.headers.Authorization;
        console.log("autheader === ",authHeader)
    
        let token = res.locals.token;
        console.log("res token from header === ",token)
    
        let  {getConnection} = require("../../server");
        let database = getConnection();
    
        //find user in auth associated with the token
        const authUser = database.get("auth").find({token : token}).value();
        console.log("auth user === ",JSON.stringify(authUser))
        if(!authUser){
            res.status(400) //.json({message:"all fields must be filled"})
            throw new Error(`no user accociated with token`);
        }
        //use id to find fruit from fruits table
        const fruits = database.get("fruits").value();
        console.log("fruit in fruits table === ",JSON.stringify(fruits));
        const fruit = fruits.filter((item)=>{
            return item.id == id
        })
        if(!fruit){
            res.status(400) //.json({message:"all fields must be filled"})
            throw new Error(`no fruit in database accociated with id ${id}`);
        }
    
        const {username : authUsername} = authUser
        console.log("username in auth === ",authUsername)
        const user = database.get("users").find({username : authUsername}).value();
        console.log("user in users table === ",JSON.stringify(user))
        const {fruits : userFruits} = user;
        console.log("user fruits === ",JSON.stringify(userFruits))
    
        //if user has fruit abort else add fruit to user
        const fruitFound = userFruits.filter((item)=>{
            if(id == item.id){
                return item;
            }
        })
        console.log("fruit found length === ",fruitFound.length)
        console.log("fruit found ===",JSON.stringify(fruitFound))
    
        if(fruitFound.length === 0){
            res.status(400) //.json({message:"all fields must be filled"})
            throw new Error(`fruit with id ${id} not in ${user.username}'s list`);
        }    
        //remove fruit then create new list and assign to user in users table
        
        const newFruitsList =  userFruits.filter((item) => {
            if(item.id != id){
                return item
            }
           });
        const result = database.get('users').find({username : user.username })
                               .assign({fruits : newFruitsList})
                               .write();
        res.json(result)
    }catch(e){console.log(e)}

    res.json({ message: 'removed fruit from the client'})

});






const removeFruitsFromClient = asyncHandler(async (req, res) => {
    try{
    
      
        let authHeader = req.headers.authorization || req.headers.Authorization;
        console.log("autheader === ",authHeader)
    
        let token = res.locals.token;
        console.log("res token from header === ",token)
    
        let  {getConnection} = require("../../server");
        let database = getConnection();
    
        //find user in auth associated with the token
        const authUser = database.get("auth").find({token : token}).value();
        console.log("auth user === ",JSON.stringify(authUser))
        if(!authUser){
            res.status(400) //.json({message:"all fields must be filled"})
            throw new Error(`no user accociated with token`);
        }
      //use username in auth table to find Client  then remove fruits
        const {username : authUsername} = authUser
        console.log("username in auth === ",authUsername)
        const result = database.get("users").find({username : authUsername})
                              .assign({"fruits" : []}).write()
   
        res.json(result)
    }catch(e){console.log(e)}

    // }
    res.json({ message: 'removed fruit from the client'})

});


/**
 * @description Replace single fruit from client 
 * @route PUT /api/client/replacefruit/
 * @access private
 */

const replaceFruitFromClient = asyncHandler(async (req, res) => {

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
    res.json({ message: 'replace fruit from the client'})

});

module.exports = {addFruitToClient,getFruitFromClient,getFruitsFromClient, 
                  removeFruitFromClient, removeFruitsFromClient,replaceFruitFromClient}