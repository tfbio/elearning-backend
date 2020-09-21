import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';
import ILoginUserDTO from '@modules/infra/DTOs/ILoginUserDTO';
import IUsersRepository from '@modules/repositories/interfaces/IUsersRepository';

interface IResponse {
  user_id: string;
  token: string;
}

@injectable()
class LoginUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ email, password }: ILoginUserDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError(400, 'User does not exists.');
    }

    if (user.password !== password) {
      throw new AppError(401, 'Incorrect email/password');
    }

    const token = sign({}, 'secret_sample', {
      subject: user.id,
      expiresIn: '16h',
    });

    return { user_id: user.id, token };
  }
}

export default LoginUserService;
