import ShowCoursesService from '@modules/services/courses/ShowCoursesService';
import FakeCoursesRepository from './fakes/FakeCoursesRepository';

let fakeCoursesRepository: FakeCoursesRepository;
let showCoursesService: ShowCoursesService;

describe('ShowCourses', () => {
  beforeEach(() => {
    fakeCoursesRepository = new FakeCoursesRepository();
    showCoursesService = new ShowCoursesService(fakeCoursesRepository);
  });

  it('should be able to show all courses categories', async () => {
    const course = await fakeCoursesRepository.create({
      category: 'category',
      name: 'course',
      image: 'image path',
    });

    const course2 = await fakeCoursesRepository.create({
      category: 'category',
      name: 'course2',
      image: 'image path',
    });
    const newCourse = await showCoursesService.execute();

    expect(newCourse).toEqual([course, course2]);
  });
});
