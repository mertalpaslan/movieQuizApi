import { body, header } from 'express-validator'
import { handleInputErrors } from './error'

const emailValidator = body('email')
  .isEmail()
  .withMessage('Please provide valid email!')
const passwordValidator = body('password').isLength({ min: 5 })
const tokenValidator = header('authorization').isString().exists()

export const login = [emailValidator, passwordValidator, handleInputErrors]
export const register = [emailValidator, passwordValidator, handleInputErrors]
export const token = [tokenValidator, handleInputErrors]
