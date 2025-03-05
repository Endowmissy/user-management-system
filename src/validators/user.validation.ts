import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import baseValidator from './index';


export const createUserValidator = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    first_name: Joi.string().trim().required(),
    last_name: Joi.string().trim().required(),
    email: Joi.string().email().required(),
  });
  await baseValidator(schema, req, res, next, 'body');
};
