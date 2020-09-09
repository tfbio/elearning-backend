import { getRepository } from 'typeorm';
import Courses from '@modules/courses/infra/entities/Courses';

interface ICourseInfoDTO {
  name: string;
  image: string;
  overview: string;
}

class CreateCourseService {
  public async execute({
    name,
    image,
    overview,
  }: ICourseInfoDTO): Promise<Courses> {
    const coursesRepository = getRepository(Courses);
    // validation here
    const newCourse = coursesRepository.create({ name, image, overview });
    await coursesRepository.save(newCourse);

    return newCourse;
  }
}

export default CreateCourseService;
