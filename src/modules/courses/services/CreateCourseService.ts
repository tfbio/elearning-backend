import { getRepository } from 'typeorm';
import Courses from '@modules/courses/infra/entities/Courses';

interface ICourseInfoDTO {
  name: string;
  image: string;
}

class CreateCourseService {
  public async execute({ name, image }: ICourseInfoDTO): Promise<Courses> {
    const coursesRepository = getRepository(Courses);
    // validation here
    const newCourse = coursesRepository.create({ name, image });
    await coursesRepository.save(newCourse);

    return newCourse;
  }
}

export default CreateCourseService;
