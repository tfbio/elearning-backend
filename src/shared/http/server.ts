import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';

import createConnection from '@shared/infra/typeorm';
import AppError from '../errors/AppError';
import routes from './routes';

createConnection();

const app = express();
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.status).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(3333, () => {
  console.log('server running...');
});
