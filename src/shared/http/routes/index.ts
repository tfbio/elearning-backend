import { Router } from 'express';

import usesRouter from '../../../modules/users/infra/routes/courses.routes';

const routes = Router();

routes.use('/users', usesRouter);

export default routes;
