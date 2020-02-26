// eslint-disable-next-line no-unused-vars
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import chalk from 'chalk';

export const notFound = (_req: Request, res: Response) => {
  res.status(400).send({ message: 'Path not found' });
};

export const catchUnhandledError = (err: ErrorRequestHandler, _req: Request, res: Response, next: NextFunction) => {
  if (err) {
    console.error(chalk.red('An unhandled error ocurred'));
    res.status(500).send({ message: 'An unhandled error ocurred', error: err });
  } else {
    next();
  }
};
