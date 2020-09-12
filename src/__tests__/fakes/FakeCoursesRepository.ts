import Courses from '@modules/courses/infra/entities/Courses';
import { uuid } from 'uuidv4';

interface ICourseInfoDTO {
  name: string;
  image: string;
  overview: string;
}

class FakeCoursesRepository {
  private database: Courses[] = [];

  public create({ name, image, overview }: ICourseInfoDTO): Courses {
    const course = new Courses();
    Object.assign(course, { id: uuid(), name, image, overview });

    return course;
  }

  public async save(course: Courses): Promise<void> {
    this.database.push(course);
  }
}

export default FakeCoursesRepository;
