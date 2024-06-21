/**
 * @swagger
 * components:
 *   schemas:
 *     Clients:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the client
 *         title:
 *           type: string
 *           description: The title of your client
 *         description:
 *           type: string
 *           description: The client explanation
 *         published:
 *           type: boolean
 *           description: Whether you have finished reading the client
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the client was added
 *     
 */
/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: The Clients managing API
 * /client:
 *   get:
 *     summary: Lists all the Clients
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: The list of the Clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Clients'
 *  client/addClient
 *   post:
 *     summary: Create a new client
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Clients'
 *     responses:
 *       200:
 *         description: The created client.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Clients'
 *       500:
 *         description: Some server error
 * /client/{id}:
 *   get:
 *     summary: Get the client by id
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The client id
 *     responses:
 *       200:
 *         description: The client response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Clients'
 *       404:
 *         description: The client was not found
 *   put:
 *    summary: Update the client by the id
 *    tags: [Clients]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The client id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Clients'
 *    responses:
 *      200:
 *        description: The client was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Clients'
 *      404:
 *        description: The client was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the client by id
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The client id
 *
 *     responses:
 *       200:
 *         description: The client was deleted
 *       404:
 *         description: The client was not found
 */
 
const express = require('express')
const {validateTokenHeader} = require("../middleware/validateTokenHeaderHandler")


const router = express.Router();



const {addFruitToClient,getFruitFromClient,getFruitsFromClient, removeFruitFromClient,
    removeFruitsFromClient,replaceFruitFromClient} = require("../controller/clientController");

router.get("/getfruits/",validateTokenHeader,getFruitsFromClient);

router.get("/getfruit/:id",validateTokenHeader,getFruitFromClient);

router.post("/addfruit/",validateTokenHeader,addFruitToClient);

router.put("/replacefruit/",validateTokenHeader,replaceFruitFromClient);

router.delete("/removefruit/:id",validateTokenHeader,removeFruitFromClient);

router.delete("/removefruits/",validateTokenHeader,removeFruitsFromClient);



module.exports = router;


