const express = require('express')
const {verifyToken} = require("../middleware/verifyToken")
const {validateHeaderToken} = require("../middleware/validateHeaderTokenHandler")
const {fakeHandler} = require("../middleware/fakeHandler")



const router = express.Router();

const {getFruit, getAllFruits} = require("../controller/fruitController");

router.get("/getfruits/",fakeHandler,getAllFruits);

router.get("/getfruit/:id",getFruit);


module.exports = router;


