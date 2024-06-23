
/**
 *  *     parameters:
 *       - in: body
 *       - name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: The user username
 *       - name: password
 *         schema:
 *           type: string
 *         required: true
 *         description: The user password
 *       - name: confirm_password
 *         schema:
 *           type: string
 *         required: true
 *         description: The user confirmation password
 *       - name: nickname
 *         schema:
 *           type: string
 *         required: false
 *         description: The user alias
 */





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
 *     
 */










/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The Users managing API
 * 
 * 
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
 *         description: The list of the User Credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 * /user/post/2:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * /user/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: The user was not found
 *   put:
 *    summary: Update the user by the id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */
 

const express = require('express')
const {validateTokenBody} = require("../middleware/validateTokenBodyHandler")

const router = express.Router();

const {registerUser, loginUser, logoutUser, resetUser} = require("../controller/userController");

router.post("/register",registerUser);

router.post("/login",loginUser);

router.post("/logout",validateTokenBody,logoutUser);

router.post("/reset",validateTokenBody,resetUser);



module.exports = router;


