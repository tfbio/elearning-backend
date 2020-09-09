import { Router } from 'express';

import UsersController from '@modules/users/infra/controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/users', usersController.create);

export default usersRouter;
