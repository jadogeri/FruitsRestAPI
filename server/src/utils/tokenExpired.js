
function tokenExpired(token){
    const jwt = require("jsonwebtoken")

    const verified = jwt.verify(token, 'joseph123456789');
    console.log(JSON.stringify(verified));
    const {username,exp} = verified
    console.log(Date.now())
    let result = false;
    if (Date.now() >= exp * 1000) {
        result = true;
    }
    return result;


}

module.exports = {tokenExpired}