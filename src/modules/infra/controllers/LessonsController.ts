import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateLessonService from '@modules/services/module_lessons/CreateLessonService';
import ShowLessonsService from '@modules/services/module_lessons/ShowLessonsService';

class LessonsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params;
    const showLesson = container.resolve(ShowLessonsService);

    const lessons = await showLesson.execute({
      course_id,
    });

    return response.status(200).json(lessons);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, length, description, video_id } = request.body;
    const { course_id } = request.params;
    const createLesson = container.resolve(CreateLessonService);

    const lesson = await createLesson.execute({
      name,
      length,
      description,
      video_id,
      course_id,
    });

    return response.status(200).json(lesson);
  }
  /*
  public async update(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { lesson_id } = request.params;
    const updateLesson = container.resolve(UpdateLessonService);
  }
  */
}

export default LessonsController;
