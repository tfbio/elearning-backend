import Lessons from '../../infra/entities/Lessons';
import ICreateLessonDTO from '../../infra/DTOs/ICreateLessonDTO';

export default interface ILessonsRepository {
  create(data: ICreateLessonDTO): Promise<Lessons>;
  save(lesson: Lessons): Promise<void>;
  find(course_id: string): Promise<Lessons[]>;
}
