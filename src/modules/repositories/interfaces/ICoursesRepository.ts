import Courses from '../../infra/entities/Courses';
import ICreateCourseDTO from '../../infra/DTOs/ICreateCourseDTO';

export default interface ICousersRepository {
  create(data: ICreateCourseDTO): Promise<Courses>;
  save(course: Courses): Promise<void>;
  findCourse(name: string): Promise<Courses | undefined>;
  findAll(): Promise<Courses[]>;
}
