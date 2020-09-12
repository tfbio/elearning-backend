import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCourseService from '@modules/services/CreateCourseService';

class CoursesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, image, overview } = request.body;
    const createCourse = container.resolve(CreateCourseService);

    const course = await createCourse.execute({
      name,
      image,
      overview,
    });

    return response.status(200).json(course);
  }
}

export default CoursesController;
