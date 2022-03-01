import { body } from 'express-validator'

export const registerValidationRules = [
  body('username').notEmpty().withMessage('username is required'),
  body('email').notEmpty().withMessage('username is required').isEmail().withMessage('email invalid format'),
  body('password').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
  body('confirmPassword').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
  body('firstName').notEmpty().withMessage('firstName is required'),
  body('lastName').notEmpty().withMessage('lastName is required')
]
