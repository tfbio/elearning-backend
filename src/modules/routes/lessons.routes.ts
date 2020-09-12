import { Router } from 'express';
import LessonsController from '@modules/infra/controllers/LessonsController';

const lessonsRouter = Router();
const lessonsController = new LessonsController();

lessonsRouter.post('/', lessonsController.create);

export default lessonsRouter;
