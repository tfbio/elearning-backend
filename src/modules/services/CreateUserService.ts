import { inject, injectable } from 'tsyringe';
import Users from '@modules/infra/entities/Users';
import IUsersRepository from '../repositories/interfaces/IUsersRepository';
import ICreateUserDTO from '../infra/DTOs/ICreateUserDTO';

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
    // some validation here

    const user = await this.usersRepository.create({ email, name, password });

    return user;
  }
}

export default CreateUserService;
