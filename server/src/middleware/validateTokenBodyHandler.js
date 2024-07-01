const jwt = require('jsonwebtoken');
function validateTokenBody(req, res, next) {
const { token } = req.body
if (!token){ 
    return res.status(401).json({ error: 'Access denied due to no token ' });}
try {
 const verified = jwt.verify(token, 'joseph123456789');
 console.log(JSON.stringify(verified));
 next();
 } catch (error) {
 res.status(401).json({ error: 'Invalid token' });
 }
 };

module.exports = { validateTokenBody };