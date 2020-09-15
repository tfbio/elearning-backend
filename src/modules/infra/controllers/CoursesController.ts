import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCourseService from '@modules/services/CreateCourseService';
import ShowCoursesService from '@modules/services/ShowCoursesService';
import UpdateCoursesService from '@modules/services/UpdateCourseService';

class CoursesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const showCourses = container.resolve(ShowCoursesService);
    const courses = await showCourses.execute();

    return response.status(200).json(courses);
  }

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

  public async put(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params;
    const { overview } = request.body;

    const updateCourse = container.resolve(UpdateCoursesService);
    const course = await updateCourse.execute({ course_id, overview });

    return response.status(200).json(course);
  }
}

export default CoursesController;
