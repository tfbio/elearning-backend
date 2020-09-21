import 'reflect-metadata';

import { inject, injectable } from 'tsyringe';
import Courses from '@modules/infra/entities/Courses';
import AppError from '@shared/errors/AppError';
import ICreateCourseDTO from '@modules/infra/DTOs/ICreateCourseDTO';
import ICoursesRepository from '@modules/repositories/interfaces/ICoursesRepository';

@injectable()
class CreateCourseService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute({
    category,
    name,
    image,
  }: ICreateCourseDTO): Promise<Courses> {
    const courseVerify = await this.coursesRepository.findCourse(name);

    if (courseVerify) {
      throw new AppError(400, 'Course  with this name is already registered');
    }

    const course = await this.coursesRepository.create({
      category,
      name,
      image,
    });

    return course;
  }
}

export default CreateCourseService;
