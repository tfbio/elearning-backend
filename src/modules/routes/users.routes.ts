import { Router } from 'express';

import UsersController from '@modules/infra/controllers/UsersController';
import SessionController from '@modules/infra/controllers/SessionController';

const usersRouter = Router();
const usersController = new UsersController();
const sessionController = new SessionController();

usersRouter.post('/', usersController.create);
usersRouter.post('/login', sessionController.create);

export default usersRouter;
