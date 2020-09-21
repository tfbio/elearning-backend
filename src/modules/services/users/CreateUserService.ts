import 'reflect-metadata';

import { inject, injectable } from 'tsyringe';
import Users from '@modules/infra/entities/Users';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/repositories/interfaces/IUsersRepository';
import ICreateUserDTO from '@modules/infra/DTOs/ICreateUserDTO';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<Users> {
    const userVerify = await this.usersRepository.findByEmail(email);
    if (userVerify) {
      throw new AppError(400, 'This email is already taken');
    }

    const user = await this.usersRepository.create({ email, name, password });

    return user;
  }
}

export default CreateUserService;
