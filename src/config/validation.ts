import { body, param } from 'express-validator';

export const userRegistrationValidation = [
  body('username').isString().isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
];

export const feedbackSubmissionValidation = [
  body('company_name').isString().notEmpty(),
  body('url').isURL(),
  body('feedback_requested').isString()
];