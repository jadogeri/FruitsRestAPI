const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateHeaderToken = asyncHandler(async (req,res,next) =>{
    let token;
        let authHeader = req.headers.authorization || req.headers.Authorization;

        if(authHeader && authHeader.startsWith('Bearer')){
            token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, "joseph123456789", (err, decoded) =>{

                if(err){
                    res.status(401);
                    throw new Error("User is not authorized")
                }
                console.log(decoded);
                req.token = decoded.token;
                next();
            });
            if(!token){
                res.status(401);
                throw new Error("User is not authorize or token is missing in request");
            }
        }
})

module.exports = { validateHeaderToken };

/**
 * const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
const { token } = req.body
if (!token){ 
    return res.status(401).json({ error: 'Access denied' });}
try {
 const verified = jwt.verify(token, 'joseph123456789');
 console.log(JSON.stringify(verified));
 next();
 } catch (error) {
 res.status(401).json({ error: 'Invalid token' });
 }
 };

module.exports = { verifyToken };
 */