import { getRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Users from '@modules/users/infra/entities/Users';

interface IUserInfoDTO {
  email: string;
  name: string;
  password: string;
}

class CreateUserService {
  public async execute({ email, name, password }: IUserInfoDTO): Promise<void> {
    const usersRepository = getRepository(Users);
    // some validation here

    const newUser = usersRepository.create({ email, name, password });
    await usersRepository.save(newUser);
  }
}

export default CreateUserService;
