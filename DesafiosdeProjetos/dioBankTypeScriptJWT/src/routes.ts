import { Router } from "express";
import { LoginController } from "./controllers/LoginController";
import { UserController } from "./controllers/UserController";
import { verifyAuth } from "./midleware/verifyAuth";

export const router = Router()

const userController = new UserController();
const loginController = new LoginController();

router.post('/user', userController.createUser) 
router.get('/users', userController.getAllUsers) 
router.get('/user/:id', verifyAuth, userController.getUser) 
router.delete('/user/:id', userController.deleteUser) 

router.post('/login', loginController.login)