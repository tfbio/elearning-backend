import { getRepository } from 'typeorm';
import Courses from '@modules/infra/entities/Courses';
import ICreateCourseDTO from '../infra/DTOs/ICreateCourseDTO';

class CreateCourseService {
  public async execute({
    name,
    image,
    overview,
  }: ICreateCourseDTO): Promise<Courses> {
    const coursesRepository = getRepository(Courses);
    // validation here
    const newCourse = coursesRepository.create({ name, image, overview });
    await coursesRepository.save(newCourse);

    return newCourse;
  }
}

export default CreateCourseService;
