import ICreateCourseDTO from '@modules/infra/DTOs/ICreateCourseDTO';
import Courses from '@modules/infra/entities/Courses';
import ICousersRepository from '@modules/repositories/interfaces/ICoursesRepository';
import { v4 } from 'uuid';

class FakeCoursesRepository implements ICousersRepository {
  private database: Courses[] = [];

  public async create({
    category,
    name,
    image,
  }: ICreateCourseDTO): Promise<Courses> {
    const course = new Courses();
    Object.assign(course, { id: v4(), category, name, image });

    this.database.push(course);
    return course;
  }

  public async save(course: Courses): Promise<void> {
    const courseIndex = this.database.findIndex(
      courseFound => courseFound.id === course.id,
    );

    this.database[courseIndex] = course;
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
