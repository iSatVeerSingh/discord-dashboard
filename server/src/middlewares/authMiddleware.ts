import { NextFunction, Request, Response } from 'express';

export const IsAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.user)
  return req.user ? next() : res.status(403).send('Unauthorizied')
};
