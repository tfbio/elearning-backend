import express, { Request, Response, NextFunction } from 'express';

import createConnection from '@shared/typeorm';
import session from 'express-session';
import AppError from '../errors/AppError';
import routes from './routes';

createConnection();

const app = express();
app.use(express.json());
app.use(
  session({
    secret: 'iy98hcbh489n38984y4h498',
    resave: true,
    saveUninitialized: false,
  }),
);

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
