const express = require('express')
const {verifyToken} = require("../middleware/verifyToken")

const router = express.Router();

const {registerUser, loginUser, logoutUser, resetUser} = require("../controller/userController");

router.post("/register",registerUser);

router.post("/login",loginUser);

router.post("/logout",verifyToken,logoutUser);

router.post("/reset",resetUser);



module.exports = router;


