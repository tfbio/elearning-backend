import { Request, Response } from 'express';
import CreateCourseService from '@modules/courses/services/CreateCourseService';

class CoursesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, image, overview } = request.body;
    const createCourse = new CreateCourseService();

    const newCourse = await createCourse.execute({
      name,
      image,
      overview,
    });

    return response.status(200).json(newCourse);
  }
}

export default CoursesController;
