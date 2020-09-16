import ICreateLessonDTO from '@modules/infra/DTOs/ICreateLessonDTO';
import Lessons from '@modules/infra/entities/Lessons';
import ILessonsRepository from '@modules/repositories/interfaces/IlessonsRepository';
import { v4 } from 'uuid';

class FakeLessonsRepository implements ILessonsRepository {
  private database: Lessons[] = [];

  public async create({
    name,
    length,
    description,
    video_id,
    course_id,
  }: ICreateLessonDTO): Promise<Lessons> {
    const lesson = new Lessons();
    Object.assign(lesson, {
      id: v4(),
      name,
      length,
      description,
      video_id,
      course_id,
    });

    this.database.push(lesson);
    return lesson;
  }

  public async save(course: Lessons): Promise<void> {
    const courseIndex = this.database.findIndex(
      courseFound => courseFound.id === course.id,
    );

    this.database[courseIndex] = course;
  }

  public async find(course_id: string): Promise<Lessons[]> {
    const lessonList = this.database.filter(
      lesson => lesson.course_id === course_id,
    );

    return lessonList;
  }
}

export default FakeLessonsRepository;
