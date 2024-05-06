import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/customeerror';

export const   errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  console.error(err); // Log the error for debugging purposes

  res.status(500).json({ errors: [{ message: 'Something went wrong' }] });
  
};
