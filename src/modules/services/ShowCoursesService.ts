import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import Courses from '@modules/infra/entities/Courses';
import ICousersRepository from '@modules/repositories/interfaces/ICoursesRepository';

@injectable()
class ShowCoursesService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICousersRepository,
  ) {}

  public async execute(): Promise<Courses[]> {
    const courses = await this.coursesRepository.findAll();

    return courses;
  }
}

export default ShowCoursesService;
