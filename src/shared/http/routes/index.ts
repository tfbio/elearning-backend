import { Router } from 'express';

import usersRouter from '@modules/routes/users.routes';
import coursesRouter from '@modules/routes/courses.routes';
import lessonsRouter from '@modules/routes/lessons.routes';

const routes = Router();

routes.use('/users', usersRouter);
// routes.use('profile' profileRouter);
routes.use('/courses', coursesRouter);
routes.use('/courses', lessonsRouter);

export default routes;
