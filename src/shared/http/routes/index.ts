import { Router } from 'express';

import usersRouter from '@modules/users/infra/routes/users.routes';
import coursesRouter from '@modules/courses/infra/routes/courses.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/courses', coursesRouter);

export default routes;
