import Users from '../../infra/entities/Users';
import ICreateUserDTO from '../../infra/DTOs/ICreateUserDTO';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<Users>;
  save(course: Users): Promise<void>;
  findById(id: string): Promise<Users | undefined>;
  findByEmail(email: string): Promise<Users | undefined>;
}
