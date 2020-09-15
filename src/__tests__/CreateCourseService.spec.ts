import CreateCourseService from '@modules/services/CreateCourseService';
import AppError from '@shared/errors/AppError';
import FakeCoursesRepository from './fakes/FakeCoursesRepository';

let createCourseService: CreateCourseService;
let fakeCoursesRepository: FakeCoursesRepository;

describe('CreateCourses', () => {
  beforeEach(() => {
    fakeCoursesRepository = new FakeCoursesRepository();
    createCourseService = new CreateCourseService(fakeCoursesRepository);
  });

  it('should be able to create a new course', async () => {
    const newCourse = await createCourseService.execute({
      name: 'new course',
      image: 'image path',
      overview: 'new course descrip',
    });

    expect(newCourse).toHaveProperty('id');
  });

  it('should not be able to create two courses with same name', async () => {
    await createCourseService.execute({
      name: 'course',
      image: 'image path',
      overview: 'new course descrip',
    });

    await expect(
      createCourseService.execute({
        name: 'course',
        image: 'image path',
        overview: 'new course descrip',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
