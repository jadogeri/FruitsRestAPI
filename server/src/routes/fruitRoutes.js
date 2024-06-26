const express = require('express')
const {validateTokenHeader} = require("../middleware/validateTokenHeaderHandler")

const router = express.Router();

const {getFruit, getAllFruits} = require("../controllers/fruitController");

router.get("/getfruits/",validateTokenHeader,getAllFruits);

router.get("/getfruit/:id",validateTokenHeader,getFruit);


module.exports = router;


