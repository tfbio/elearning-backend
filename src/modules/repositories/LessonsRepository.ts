import { getRepository, Repository } from 'typeorm';

import ICreateLessonDTO from '@modules/infra/DTOs/ICreateLessonDTO';
import Lessons from '@modules/infra/entities/Lessons';
import ILessonsRepository from './interfaces/IlessonsRepository';

class LessonsRepository implements ILessonsRepository {
  private typeOrmRepository: Repository<Lessons>;

  constructor() {
    this.typeOrmRepository = getRepository(Lessons);
  }

  public async create({
    name,
    length,
    description,
    video_id,
    course_id,
  }: ICreateLessonDTO): Promise<Lessons> {
    const lesson = this.typeOrmRepository.create({
      name,
      length,
      description,
      video_id,
      course_id,
    });
    await this.typeOrmRepository.save(lesson);

    return lesson;
  }

  public async save(lesson: Lessons): Promise<void> {
    await this.typeOrmRepository.save(lesson);
  }

  public async find(course_id: string): Promise<Lessons[]> {
    const lessonsList = await this.typeOrmRepository.find({
      where: { course_id },
    });

    return lessonsList;
  }
}

export default LessonsRepository;
