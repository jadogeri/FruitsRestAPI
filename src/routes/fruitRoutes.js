const express = require('express')
const {verifyToken} = require("../middleware/verifyToken")

const router = express.Router();

const {getFruit, getAllFruits} = require("../controller/fruitController");

router.get("/getfruits/",verifyToken,getAllFruits);

router.get("/getfruit/:id",getFruit);


module.exports = router;


