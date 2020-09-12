import { Router } from 'express';

import usersRouter from '@modules/routes/users.routes';
import coursesRouter from '@modules/routes/courses.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/courses', coursesRouter);

export default routes;
