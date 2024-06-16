const express = require('express')

const router = express.Router();

const {addFruitToClient,getFruitFromClient,getFruitsFromClient, 
    removeFruitFromClient,removeFruitsFromClient,replaceFruitFromClient} = require("../controller/clientController");

router.get("/getfruits",getFruitsFromClient);

router.get("/getfruit/:id",getFruitFromClient);

router.post("/addfruit",addFruitToClient);

router.put("/replacefruit/:id",replaceFruitFromClient);

router.delete("/removefruit/:id",removeFruitFromClient);

router.delete("/removefruits/",removeFruitsFromClient);




module.exports = router;


