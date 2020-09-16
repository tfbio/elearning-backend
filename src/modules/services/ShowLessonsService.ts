import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import Lessons from '@modules/infra/entities/Lessons';
import ILessonsRepository from '@modules/repositories/interfaces/IlessonsRepository';

interface ILessonsInfoDTO {
  course_id: string;
}

@injectable()
class ShowLessonsService {
  constructor(
    @inject('LessonsRepository')
    private lessonsRepository: ILessonsRepository,
  ) {}

  public async execute({ course_id }: ILessonsInfoDTO): Promise<Lessons[]> {
    const courses = await this.lessonsRepository.find(course_id);

    return courses;
  }
}

export default ShowLessonsService;
