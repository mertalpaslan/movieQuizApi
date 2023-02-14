import { body } from 'express-validator'
import { handleInputErrors } from './error'

const emailValidator = body('email').isEmail()
const passwordValidator = body('password').isLength({ min: 5 })

export const login = [emailValidator, passwordValidator, handleInputErrors]
export const register = [emailValidator, passwordValidator, handleInputErrors]
