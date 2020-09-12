import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../../services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, name, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({ email, name, password });

    return response.status(200).json(user);
  }
}
