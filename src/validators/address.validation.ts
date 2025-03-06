import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import baseValidator from './index';


export const createUserAddressValidator = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    user_id: Joi.string().trim().required(),
    street: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().required(),
    country: Joi.string().trim().optional(),
    zip_code: Joi.string().trim().optional(),
  });
  await baseValidator(schema, req, res, next, 'body');
};

export const updateUserAddressValidator = async (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
      street: Joi.string().trim().optional(),
      city: Joi.string().trim().optional(),
      state: Joi.string().trim().optional(),
      country: Joi.string().trim().optional(),
      zip_code: Joi.string().trim().optional(),
    });
    await baseValidator(schema, req, res, next, 'body');
  };
