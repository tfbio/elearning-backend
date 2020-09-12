import ICreateUserDTO from '@modules/infra/DTOs/ICreateUserDTO';
import Users from '@modules/infra/entities/Users';
import { getRepository, Repository } from 'typeorm';
import IUsersRepository from './interfaces/IUsersRepository';

class UsersRepository implements IUsersRepository {
  private typeOrmRepository: Repository<Users>;

  constructor() {
    this.typeOrmRepository = getRepository(Users);
  }

  public async create({
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<Users> {
    const user = this.typeOrmRepository.create({ email, name, password });
    await this.typeOrmRepository.save(user);

    return user;
  }

  public async save(course: Users): Promise<void> {
    await this.typeOrmRepository.save(course);
  }
}

export default UsersRepository;
