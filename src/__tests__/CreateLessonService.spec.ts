import CreateLessonService from '@modules/services/CreateLessonService';
import AppError from '@shared/errors/AppError';
import FakeLessonsRepository from './fakes/FakeLessonsRepository';

let createLessonService: CreateLessonService;
let fakeLessonsRepository: FakeLessonsRepository;

describe('CreateLesson', () => {
  beforeEach(() => {
    fakeLessonsRepository = new FakeLessonsRepository();
    createLessonService = new CreateLessonService(fakeLessonsRepository);
  });

  it('should be able to create a new course', async () => {
    const newCourse = await createLessonService.execute({
      name: 'new lesson',
      length: 182,
      description: 'lesson description',
      video_id: 'video_id',
      course_id: 'course_id',
    });

    expect(newCourse).toHaveProperty('id');
  });

  it('should not be able to create two lessons with exact same name in same course', async () => {
    await createLessonService.execute({
      name: 'new lesson',
      length: 182,
      description: 'lesson description',
      video_id: 'video_id',
      course_id: 'course_id',
    });

    await expect(
      createLessonService.execute({
        name: 'new lesson',
        length: 182,
        description: 'lesson description',
        video_id: 'video_id',
        course_id: 'course_id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
