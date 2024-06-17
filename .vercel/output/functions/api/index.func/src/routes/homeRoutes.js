const express = require('express')
const {validateTokenBody} = require("../middleware/validateTokenBodyHandler")

const router = express.Router();

const {helloHome} = require("../controller/homeController");

router.get("/",helloHome);

module.exports = router;


