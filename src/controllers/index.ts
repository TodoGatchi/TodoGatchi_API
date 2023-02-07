import { Request, Response } from 'express';

export const test = (re: Request, res: Response) => {
  res.send("hello from controllers")
}