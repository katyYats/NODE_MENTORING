import { Router } from 'express';
import UserController from '../contollers/user';
import { userValidator } from '../middlewares/userValidationMiddleware';

const UserRouter = Router();

UserRouter.get('/', UserController.getUsers)
    .post('/', userValidator, UserController.createUser)
    .get('/:id', UserController.getUser)
    .put('/:id', userValidator, UserController.updateUser)
    .delete('/:id', UserController.deleteUser);

export default UserRouter;
