import { Request, Response } from 'express';
import { container } from 'tsyringe';
import LoginUserService from '../../services/LoginUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authentication = container.resolve(LoginUserService);

    const { user_id, token } = await authentication.execute({
      email,
      password,
    });

    return response.status(200).json({ user_id, token });
  }
}
