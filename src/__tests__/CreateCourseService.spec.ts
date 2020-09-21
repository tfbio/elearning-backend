import CreateCourseService from '@modules/services/courses/CreateCourseService';
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
      category: 'category',
      name: 'new course',
      image: 'image path',
    });

    expect(newCourse).toHaveProperty('id');
  });

  it('should not be able to create two courses with same name', async () => {
    await createCourseService.execute({
      category: 'categgory',
      name: 'course',
      image: 'image path',
    });

    await expect(
      createCourseService.execute({
        category: 'categgory',
        name: 'course',
        image: 'image path',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
