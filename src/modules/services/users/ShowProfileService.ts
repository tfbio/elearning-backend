import 'reflect-metadata';

import Users from '@modules/infra/entities/Users';
import IUsersRepository from '@modules/repositories/interfaces/IUsersRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequestDTO {
  user_id: string;
}

@injectable()
class ShowProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequestDTO): Promise<Users> {
    const user = await this.usersRepository.findById(user_id);
    if (!user) {
      throw new AppError(400, 'User does not exists in database');
    }

    return user;
  }
}

export default ShowProfileService;
