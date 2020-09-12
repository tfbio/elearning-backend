import { container } from 'tsyringe';

import CoursesRepository from '@modules/repositories/CoursesRepository';
import ICousersRepository from '@modules/repositories/interfaces/ICoursesRepository';

import UsersRepository from '@modules/repositories/UsersRepository';
import IUsersRepository from '@modules/repositories/interfaces/IUsersRepository';

container.registerSingleton<ICousersRepository>(
  'CoursesRepository',
  CoursesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
