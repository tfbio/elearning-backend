import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) {
    throw new AppError(401, 'JWT is missing.');
  }

  const [, token] = authorizationHeader.split(' ');

  try {
    const decodedToken = verify(token, 'secret_sample');
    const { sub } = decodedToken as ITokenPayload;

    request.user = {
      id: sub,
    };
    return next();
  } catch (err) {
    throw new AppError(401, 'Invalid token.');
  }
}
