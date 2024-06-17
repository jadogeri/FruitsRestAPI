const asyncHandler = require('express-async-handler');
//const User = require('../models/User.ts');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * @description Post Register 
 * @route POST /api/User/register
 * @access public
 */

const helloHome = asyncHandler(async (req, res) => {
     
 
     res.json({message : "hello ! welcome to fruits rest api"});
      
});


module.exports = {helloHome}