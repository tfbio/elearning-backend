import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import Courses from '@modules/infra/entities/Courses';
import ICousersRepository from '@modules/repositories/interfaces/ICoursesRepository';
import AppError from '@shared/errors/AppError';

interface IUpdateInfoDTO {
  course_id: string;
  overview: string;
}

@injectable()
class UpdateCoursesService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICousersRepository,
  ) {}

  public async execute({
    course_id,
    overview,
  }: IUpdateInfoDTO): Promise<Courses> {
    const course = await this.coursesRepository.findCourse(course_id);
    if (!course) {
      throw new AppError(404, 'Course not found');
    }

    course.overview = overview;
    await this.coursesRepository.save(course);

    return course;
  }
}

export default UpdateCoursesService;
