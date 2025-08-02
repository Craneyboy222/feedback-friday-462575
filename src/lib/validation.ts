import * as Joi from 'joi';

export const userSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});

export const feedbackSchema = Joi.object({
  companyName: Joi.string().required(),
  url: Joi.string().uri().required(),
  purpose: Joi.string().required(),
  technologies: Joi.array().items(Joi.string()).required(),
  feedbackRequested: Joi.boolean().required(),
  betaTesters: Joi.boolean().required(),
  additionalComments: Joi.string().allow('').optional()
});