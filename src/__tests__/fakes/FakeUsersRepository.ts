import Users from '@modules/users/infra/entities/Users';
import { uuid } from 'uuidv4';

interface IUserInfoDTO {
  email: string;
  name: string;
  password: string;
}

class FakeUsersRepository {
  private database: Users[] = [];

  public create({ email, name, password }: IUserInfoDTO): Users {
    const user = new Users();
    Object.assign(user, { id: uuid(), email, name, password });

    return user;
  }

  public async save(user: Users): Promise<void> {
    this.database.push(user);
  }
}

export default FakeUsersRepository;
