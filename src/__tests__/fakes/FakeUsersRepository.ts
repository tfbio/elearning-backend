import ICreateUserDTO from '@modules/infra/DTOs/ICreateUserDTO';
import Users from '@modules/infra/entities/Users';
import IUsersRepository from '@modules/repositories/interfaces/IUsersRepository';
import { v4 } from 'uuid';

class FakeUsersRepository implements IUsersRepository {
  private database: Users[] = [];

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<Users> {
    const course = new Users();
    Object.assign(course, { id: v4(), name, email, password });

    return course;
  }

  public async save(course: Users): Promise<void> {
    this.database.push(course);
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const userFound = this.database.find(user => user.email === email);

    return userFound;
  }
}

export default FakeUsersRepository;
