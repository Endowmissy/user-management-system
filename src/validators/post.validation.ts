import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import baseValidator from './index';


export const createPostValidator = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    user_id: Joi.string().trim().required(),
    title: Joi.string().trim().required(),
    body: Joi.string().trim().required(),
  });
  await baseValidator(schema, req, res, next, 'body');
};
