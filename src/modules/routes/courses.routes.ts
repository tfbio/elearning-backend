import { Router } from 'express';
import CoursesController from '@modules/infra/controllers/CoursesController';

const coursesRouter = Router();
const coursesController = new CoursesController();

coursesRouter.get('/', coursesController.show);
coursesRouter.post('/', coursesController.create);

export default coursesRouter;
