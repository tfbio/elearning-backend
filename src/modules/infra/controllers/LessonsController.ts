import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateLessonService from '@modules/services/CreateLessonService';

class LessonsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, length, description, video_id } = request.body;
    const createLesson = container.resolve(CreateLessonService);

    const lesson = await createLesson.execute({
      name,
      length,
      description,
      video_id,
    });

    return response.status(200).json(lesson);
  }
}

export default LessonsController;
