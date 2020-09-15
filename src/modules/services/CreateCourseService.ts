import 'reflect-metadata';

import { inject, injectable } from 'tsyringe';
import Courses from '@modules/infra/entities/Courses';
import AppError from '@shared/errors/AppError';
import ICreateCourseDTO from '../infra/DTOs/ICreateCourseDTO';
import ICoursesRepository from '../repositories/interfaces/ICoursesRepository';

@injectable()
class CreateCourseService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute({
    name,
    image,
    overview,
  }: ICreateCourseDTO): Promise<Courses> {
    const courseVerify = await this.coursesRepository.findCourse(name);

    if (courseVerify) {
      throw new AppError(400, 'Course  with this name is already registered');
    }

    const course = await this.coursesRepository.create({
      name,
      image,
      overview,
    });

    return course;
  }
}

export default CreateCourseService;
