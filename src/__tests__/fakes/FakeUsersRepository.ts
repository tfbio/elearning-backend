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
    const user = new Users();
    Object.assign(user, { id: v4(), name, email, password });

    this.database.push(user);
    return user;
  }

  public async save(user: Users): Promise<void> {
    const userIndex = this.database.findIndex(
      userFound => userFound.id === user.id,
    );

    this.database[userIndex] = user;
  }

  public async findById(id: string): Promise<Users | undefined> {
    const userFound = this.database.find(user => user.id === id);

    return userFound;
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const userFound = this.database.find(user => user.email === email);

    return userFound;
  }
}

export default FakeUsersRepository;
