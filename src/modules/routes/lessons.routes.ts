import { Router } from 'express';
import LessonsController from '@modules/infra/controllers/LessonsController';

const lessonsRouter = Router();
const lessonsController = new LessonsController();

// lessonsRouter.get('/:course_id', lessonsController.index); list all lesson in one course
lessonsRouter.post('/', lessonsController.create);
// lessonsRouter.put('/:lesson_id', lessonsController.update); update a lesson info

export default lessonsRouter;
