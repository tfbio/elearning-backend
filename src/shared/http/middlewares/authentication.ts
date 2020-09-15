import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';

interface ITokenPayload {
  iat: number; // The time the JWT was issued
  exp: number; // This will define the expiration in NumericDate value
  sub: string; // The subject of the token
}

export default function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) {
    throw new AppError(401, 'Token is missing.');
  }

  const [, token] = authorizationHeader.split(' ');

  try {
    const decodedToken = verify(token, 'secret_sample');
    const { sub } = decodedToken as ITokenPayload;

    request.user = {
      id: sub, // set request.user.id as sub before sending it forward
    };
    return next();
  } catch (err) {
    throw new AppError(401, 'Invalid token.');
  }
}
/*
  The token must be passed as a header.authorization by the login user request,
  failing otherwise. With header.authorization present it will verify if the token
  was created in this application using our secret key, which is also used in verify()
*/
