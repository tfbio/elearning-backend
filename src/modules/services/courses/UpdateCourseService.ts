import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import Courses from '@modules/infra/entities/Courses';
import ICousersRepository from '@modules/repositories/interfaces/ICoursesRepository';
import AppError from '@shared/errors/AppError';

interface IUpdateInfoDTO {
  course_id: string;
  category: string;
  name: string;
}

@injectable()
class UpdateCoursesService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICousersRepository,
  ) {}

  public async execute({
    course_id,
    category,
    name,
  }: IUpdateInfoDTO): Promise<Courses> {
    const course = await this.coursesRepository.findCourse(course_id);
    if (!course) {
      throw new AppError(404, 'Course not found');
    }

    course.name = name;
    course.category = category;

    await this.coursesRepository.save(course);

    return course;
  }
}

export default UpdateCoursesService;
