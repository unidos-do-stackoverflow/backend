import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userRoutes = Router();
const user = new UserController();

userRoutes.post('/signup', user.signup);
userRoutes.post('/login', user.login);

export default userRoutes;
