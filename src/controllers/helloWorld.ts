// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express';

export function helloWorld(_req: Request, res: Response) {
  res.json({ message: 'Hello World' });
}
