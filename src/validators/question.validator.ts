import { body, param } from 'express-validator'
import { handleInputErrors } from './error'

const bodyValidator = body('body').isString().isLength({ min: 20 })
const quizIdValidator = body('quizId').isInt().toInt()
const idParamValidator = param('id').isInt().toInt()

const create = [bodyValidator, quizIdValidator, handleInputErrors]

const update = [
  bodyValidator,
  quizIdValidator,
  idParamValidator,
  handleInputErrors,
]

const show = [idParamValidator, handleInputErrors]

const destroy = [idParamValidator, handleInputErrors]

export { create, update, show, destroy }
