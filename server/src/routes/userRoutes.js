const express = require('express')
const {validateTokenBody} = require("../middleware/validateTokenBodyHandler")

const router = express.Router();

const {registerUser, loginUser, logoutUser, resetUser} = require("../controller/userController");

router.post("/register",registerUser);

router.post("/login",loginUser);

router.post("/logout",validateTokenBody,logoutUser);

router.post("/reset",validateTokenBody,resetUser);



module.exports = router;


