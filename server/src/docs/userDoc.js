
/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: adcfgrttf2343
 *           description: The auto-generated id of the user
 *         username:
 *           type: string
 *           example: JohnnyDoe
 *           description: The unique username of the user
 *         password:
 *           type: string 
 *           example: password
 *           description: The password of the user
 *         confirm_password:
 *           type: string 
 *           example: confirm_password
 *           description: The confirmation password of the user
 *         nickname:
 *           type: string
 *           example: Johnny D
 *           description: The alias of your user
 *         token:
 *           type: string
 *           description: The user auth token generated after login
 *         is_active:
 *           type: boolean
 *           description: Whether your account is active or locked state 
 *         created_at:
 *           type: string
 *           format: date
 *           description: The date the user was added
 *   securitySchemes:
 *     fruitsrestAuth:
 *       type: http
 *       scheme: bearer
 * security:
 *   fruitsrestAuth: []
 *     
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The Users managing API 
 * /api/user/register:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, password, confirm_password]
 *             properties:
 *               username:
 *                  type: string
 *               password:
 *                  type: string
 *               confirm_password: 
 *                  type: string 
 *               nickname:
 *                  type: string
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * /api/user/login:
 *   post:
 *     summary: Login the user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, password]
 *             properties:
 *               username:
 *                  type: string
 *               password:
 *                  type: string
 *     responses:
 *       200:
 *         description: The token of the Authenticated User 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required: [token]
 *               properties:
 *                 token: 
 *                   type: string
 * /api/user/logout:
 *   post:
 *     summary: Logout the authenticated user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, token]
 *             properties:
 *               username:
 *                  type: string
 *               token:
 *                  type: string
 *     responses:
 *       200:
 *         description: Clear token of Authenticated User.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required: [token]
 *               properties:
 *                 username:
 *                   type: string
 *                 token: 
 *                   type: string
 *       500:
 *         description: Some server error
 */


 