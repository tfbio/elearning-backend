import 'reflect-metadata';

import { inject, injectable } from 'tsyringe';

import Lessons from '@modules/infra/entities/Lessons';
import ILessonsRepository from '@modules/repositories/interfaces/IlessonsRepository';
import ICreateLessonDTO from '@modules/infra/DTOs/ICreateLessonDTO';

@injectable()
class CreateLessonService {
  constructor(
    @inject('LessonsRepository')
    private lessonsRepository: ILessonsRepository,
  ) {}

  public async execute({
    name,
    length,
    description,
    video_id,
    course_id,
  }: ICreateLessonDTO): Promise<Lessons> {
    const lesson = await this.lessonsRepository.create({
      name,
      length,
      description,
      video_id,
      course_id,
    });

    return lesson;
  }
}

export default CreateLessonService;
