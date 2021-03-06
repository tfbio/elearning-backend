import ICreateCourseDTO from '@modules/infra/DTOs/ICreateCourseDTO';
import Courses from '@modules/infra/entities/Courses';
import { getRepository, Repository } from 'typeorm';
import ICoursesRepository from './interfaces/ICoursesRepository';

class CoursesRepository implements ICoursesRepository {
  private typeOrmRepository: Repository<Courses>;

  constructor() {
    this.typeOrmRepository = getRepository(Courses);
  }

  public async create({
    name,
    image,
    overview,
  }: ICreateCourseDTO): Promise<Courses> {
    const course = this.typeOrmRepository.create({ name, image, overview });
    await this.typeOrmRepository.save(course);

    return course;
  }

  public async save(course: Courses): Promise<void> {
    await this.typeOrmRepository.save(course);
  }

  public async findCourse(name: string): Promise<Courses | undefined> {
    const course = await this.typeOrmRepository.findOne({ name });

    return course;
  }

  public async findAll(): Promise<Courses[]> {
    const courses = await this.typeOrmRepository.find();

    return courses;
  }
}

export default CoursesRepository;
