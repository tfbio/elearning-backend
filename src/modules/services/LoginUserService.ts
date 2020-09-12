import { getRepository } from 'typeorm';
import Users from '@modules/infra/entities/Users';

import { sign } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';

interface ILoginInfoDTO {
  email: string;
  password: string;
}

interface IResponse {
  user_id: string;
  token: string;
}

class LoginUserService {
  public async execute({ email, password }: ILoginInfoDTO): Promise<IResponse> {
    const usersRepository = getRepository(Users);

    const user = await usersRepository.findOne({ email });
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
