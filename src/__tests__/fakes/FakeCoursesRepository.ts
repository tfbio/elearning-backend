import ICreateCourseDTO from '@modules/infra/DTOs/ICreateCourseDTO';
import Courses from '@modules/infra/entities/Courses';
import ICousersRepository from '@modules/repositories/interfaces/ICoursesRepository';
import { v4 } from 'uuid';

class FakeCoursesRepository implements ICousersRepository {
  private database: Courses[] = [];

  public async create({
    name,
    image,
    overview,
  }: ICreateCourseDTO): Promise<Courses> {
    const course = new Courses();
    Object.assign(course, { id: v4(), name, image, overview });

    return course;
  }

  public async save(course: Courses): Promise<void> {
    this.database.push(course);
  }

  public async findCourse(name: string): Promise<Courses | undefined> {
    const courseFound = this.database.find(course => course.name === name);

    return courseFound;
  }

  public async findAll(): Promise<Courses[]> {
    return this.database;
  }
}

export default FakeCoursesRepository;
