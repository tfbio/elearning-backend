import { Router } from 'express';
import CoursesController from '@modules/infra/controllers/CoursesController';
// import authentication from '@shared/http/middlewares/authentication';

const coursesRouter = Router();
const coursesController = new CoursesController();

// coursesRouter.use(authentication);

coursesRouter.get('/', coursesController.index);
coursesRouter.post('/', coursesController.create);
coursesRouter.put('/:course_id', coursesController.put);

export default coursesRouter;
