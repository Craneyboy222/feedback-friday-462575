import * as Joi from 'joi';

export const validateUserRegistration = (data: any) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
  });
  return schema.validate(data);
};

export const validateFeedback = (data: any) => {
  const schema = Joi.object({
    company_name: Joi.string().required(),
    url: Joi.string().uri().required(),
    purpose: Joi.string().required(),
    technologies: Joi.array().items(Joi.string()).required(),
    feedback_requested: Joi.string().required()
  });
  return schema.validate(data);
};