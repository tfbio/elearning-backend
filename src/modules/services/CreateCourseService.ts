import 'reflect-metadata';

import { inject, injectable } from 'tsyringe';
import Courses from '@modules/infra/entities/Courses';
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
    // validation here

    const course = await this.coursesRepository.create({
      name,
      image,
      overview,
    });

    return course;
  }
}

export default CreateCourseService;
