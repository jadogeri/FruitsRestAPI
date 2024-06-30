const express = require('express')
const {validateTokenBody} = require("../middleware/validateTokenBodyHandler")

const router = express.Router();

const {registerUser, loginUser, logoutUser, resetUser, deactivateUser} = require("../controllers/userController");

router.post("/register",registerUser);

router.post("/login",loginUser);

router.post("/logout",validateTokenBody,logoutUser);

router.post("/reset",validateTokenBody,resetUser);

router.delete("/deactivate",deactivateUser);




module.exports = router;


