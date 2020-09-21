import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCourseService from '@modules/services/courses/CreateCourseService';
import ShowCoursesService from '@modules/services/courses/ShowCoursesService';
import UpdateCoursesService from '@modules/services/courses/UpdateCourseService';

class CoursesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const showCourses = container.resolve(ShowCoursesService);
    const courses = await showCourses.execute();

    return response.status(200).json(courses);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { category, name, image } = request.body;
    const createCourse = container.resolve(CreateCourseService);

    const course = await createCourse.execute({
      category,
      name,
      image,
    });

    return response.status(200).json(course);
  }

  public async put(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params;
    const { category, name } = request.body;

    const updateCourse = container.resolve(UpdateCoursesService);
    const course = await updateCourse.execute({ course_id, category, name });

    return response.status(200).json(course);
  }
}

export default CoursesController;
