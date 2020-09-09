import { Request, Response } from 'express';
import CreateUserService from '../../services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createUser = new CreateUserService();
    const { email, name, password } = request.body;

    const newUser = createUser.execute({ email, name, password });

    return response.status(200).json(newUser);
  }
}
