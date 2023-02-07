import { Request, Response } from 'express';
import * as model from '../models';

export const test = (req: Request, res: Response) => {
  const testData = {
    username: "theGang",
    pets: ["Elliott", "Momo"]
  }
  const result = model.test(testData)
  res.send(result)
}