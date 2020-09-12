import { container } from 'tsyringe';

import CoursesRepository from '@modules/repositories/CoursesRepository';
import ICousersRepository from '@modules/repositories/interfaces/ICoursesRepository';

container.registerSingleton<ICousersRepository>(
  'CoursesRepository',
  CoursesRepository,
);
