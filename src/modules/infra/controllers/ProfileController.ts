import { Request, Response } from 'express';
// import { container } from 'tsyringe';

// import ShowProfileService from '../../services/ShowProfileService';
// import UpdateProfileService from '../../services/UpdateProfileService';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<void> {
    // const user_id = request.user.id;
    // const showProfile = container.resolve(ShowProfileService);
    // const user = await showProfile.execute({ user_id });
    // return response.status(200).json(user);
  }

  public async update(request: Request, response: Response): Promise<void> {
    /*
    const user_id = request.user.id;
    const { name, email, oldPassword, newPassword } = request.body;

    const updateProfile = container.resolve(UpdateProfileService);
    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      oldPassword,
      newPassword,
    });

    return response.status(200).json(user);
    */
  }
}
