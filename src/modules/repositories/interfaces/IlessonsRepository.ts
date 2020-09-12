import Lessons from '../../infra/entities/Lessons';
import ICreateLessonDTO from '../../infra/DTOs/ICreateLessonDTO';

export default interface ILessonsRepository {
  create(data: ICreateLessonDTO): Promise<Lessons>;
  save(lesson: Lessons): Promise<void>;
}
