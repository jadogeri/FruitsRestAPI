eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoieiIsImlkIjoiNCJ9LCJpYXQiOjE3MTkyNDg5ODcsImV4cCI6MTcxOTI1MTk4N30.FKogDmhGl2eh-IsSuvOcr2K3kzC4JdJpAyjvqe4dV54



/**
 * 
 * 
 * router.get("/getfruits/",validateTokenHeader,getFruitsFromClient);

router.get("/getfruit/:id",validateTokenHeader,getFruitFromClient);

router.post("/addfruit/",validateTokenHeader,addFruitToClient);

router.put("/replacefruit/",validateTokenHeader,replaceFruitFromClient);

router.delete("/removefruit/:id",validateTokenHeader,removeFruitFromClient);

router.delete("/removefruits/",validateTokenHeader,removeFruitsFromClient);


 */

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
 * security:
 *   fruitsrestAuth: []
 *     
 */
/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: The Clients managing API
 * /api/client/getfruits:
 *   get:
 *     summary: Lists all Fruits of the Client
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
 *       500:
 *         description: Some server error
 *     security:
 *       - fruitsrestAuth:
 *           - write:clients
 *           - read:clients  
 * /api/client/addFruit:
 *   post:
 *     summary: Add a fruit to a new client
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [id] 
 *             properties:
 *               id:
 *                  type: integer
 *                  example: 1
 *     responses:
 *       200:
 *         description: The created client.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Clients'
 *       500:
 *         description: Some server error
 *     security:
 *       - fruitsrestAuth:
 *           - write:clients
 *           - read:clients  
 * /api/client/getFruit/{id}:
 *   get:
 *     summary: Get the client specific fruit by id
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
 *       500:
 *         description: Some server error
 *     security:
 *       - fruitsrestAuth:
 *           - write:clients
 *           - read:clientss  
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