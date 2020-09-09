import { Router } from 'express';
import CoursesController from '@modules/courses/infra/controllers/CoursesController';

const coursesRouter = Router();
const coursesController = new CoursesController();

coursesRouter.post('/', coursesController.create);

export default coursesRouter;
