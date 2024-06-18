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
        let authHeader = req.headers.authorization || req.headers.Authorization;
        console.log("autheader === ",authHeader)

    
        let token = res.locals.token;
        console.log("res token from header === ",token)
        let  {getConnection} = require("../../server");
        let database = getConnection();
        const fruits = database.get("fruits").value()
        res.json(fruits)

    }catch(e){console.log(e)}    
  
res.json({ message: 'Get all fruits'})

  
});


/**
 * @description Get a single Fruit 
 * @route GET /api/fruit/:id
 * @access public
 */

const getFruit = asyncHandler(async (req, res) => {

    try{    
        let authHeader = req.headers.authorization || req.headers.Authorization;
        console.log("autheader === ",authHeader)
    
        let token = res.locals.token;
        let id = req.params.id;
        if(!id){
           res.status(400) //.json({message:"all fields must be filled"})
           throw new Error('id field is mandatory');

        }
        console.log("id === ",id)
        console.log("res token from header === ",token)
        let  {getConnection} = require("../../server");
        let database = getConnection();
        const fruits = database.get("fruits").value()
        const fruit = fruits.filter((item)=>{
            return item.id == id
        })
        

        console.log("fruit === ",JSON.stringify(fruit))
        console.log("all fruits === ",JSON.stringify(fruits))

       // const result = database.get("auth").find({username :username}).assign({token : ""}).write();
       if(fruit.length === 0){
        res.status(400) //.json({message:"all fields must be filled"})
        throw new Error(`fruit with id ${id} does not exist`);

     }

        res.json(fruit)  
     
    
    }catch(e){console.log(e)}

});


module.exports = {getFruit, getAllFruits}