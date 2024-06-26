const express = require('express')
const {validateTokenHeader} = require("../middleware/validateTokenHeaderHandler")


const router = express.Router();



const {addFruitToClient,getFruitFromClient,getFruitsFromClient, removeFruitFromClient,
    removeFruitsFromClient,replaceFruitFromClient} = require("../controllers/clientController");

router.get("/getfruits/",validateTokenHeader,getFruitsFromClient);

router.get("/getfruit/:id",validateTokenHeader,getFruitFromClient);

router.post("/addfruit/",validateTokenHeader,addFruitToClient);

router.put("/replacefruit/",validateTokenHeader,replaceFruitFromClient);

router.delete("/removefruit/:id",validateTokenHeader,removeFruitFromClient);

router.delete("/removefruits/",validateTokenHeader,removeFruitsFromClient);



module.exports = router;


