import CreateCourseService from '@modules/services/CreateCourseService';

let createCourseService: CreateCourseService;

describe('CreateCourses', () => {
  beforeEach(() => {
    createCourseService = new CreateCourseService();
  });

  it('should be able to create a new course', async () => {
    const newCourse = await createCourseService.execute({
      name: 'new course',
      image: 'image path',
      overview: 'new course descrip',
    });

    expect(newCourse).toHaveProperty('id');
  });
});
