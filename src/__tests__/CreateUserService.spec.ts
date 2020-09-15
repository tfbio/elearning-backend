import CreateUserService from '@modules/services/CreateUserService';
import AppError from '@shared/errors/AppError';
import FakeUsersRepository from './fakes/FakeUsersRepository';

let createUserService: CreateUserService;
let fakeUsersRepository: FakeUsersRepository;

describe('CreateUsers', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUserService = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUserService.execute({
      name: 'user',
      email: 'email',
      password: 'password',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with email taken', async () => {
    await createUserService.execute({
      name: 'user',
      email: 'email',
      password: 'password',
    });

    await expect(
      createUserService.execute({
        name: 'user_2',
        email: 'email',
        password: 'password_2',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
