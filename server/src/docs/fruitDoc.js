/**
 * @swagger
 * components:
 *   schemas:
 *     Fruits:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the fruit
 *         title:
 *           type: string
 *           description: The title of your fruit
 *         description:
 *           type: string
 *           description: The fruit explanation
 *         published:
 *           type: boolean
 *           description: Whether you have finished reading the fruit
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the fruit was added
 * security:
 *   fruitsrestAuth: []
 *     
 */


/**
 * @swagger
 * tags:
 *   name: Fruits
 *   description: The fruits managing API
 * /api/fruit/getfruits:
 *   get:
 *     summary: Lists all the fruits
 *     tags: [Fruits]
 *     responses:
 *       200:
 *         description: The list of the fruits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Fruits'
 *       500:
 *         description: Some server error
 *     security:
 *       - fruitsrestAuth:
 *           - write:fruits
 *           - read:fruits  
 * /api/fruit/getFruit/{id}:
 *   get:
 *     summary: Get the fruit by id
 *     tags: [Fruits]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The fruit id
 *     responses:
 *       200:
 *         description: The fruit response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fruits'
 *       404:
 *         description: The fruit was not found
 *     security:
 *       - fruitsrestAuth:
 *           - write:fruits
 *           - read:fruits  
 */
 