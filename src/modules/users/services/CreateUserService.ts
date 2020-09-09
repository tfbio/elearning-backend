import { getRepository } from 'typeorm';
import Users from '@modules/users/infra/entities/Users';

interface IUserInfoDTO {
  email: string;
  name: string;
  password: string;
}

class CreateUserService {
  public async execute({
    email,
    name,
    password,
  }: IUserInfoDTO): Promise<Users> {
    const usersRepository = getRepository(Users);
    // some validation here

    const newUser = usersRepository.create({ email, name, password });
    await usersRepository.save(newUser);

    return newUser;
  }
}

export default CreateUserService;
