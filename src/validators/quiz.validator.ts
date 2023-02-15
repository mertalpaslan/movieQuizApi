import { body, param, query } from 'express-validator'
import { handleInputErrors } from './error'

const titleValidator = body('title').isString().isLength({ min: 4, max: 255 })
const showIdValidator = body('showId').isInt().toInt()
const pageQueryValidator = query('page').isInt({ min: 1 }).toInt()
const limitQueryValidator = query('limit').isInt({ min: 1, max: 20 }).toInt()
const idParamValidator = param('id').isInt().toInt()

const create = [titleValidator, showIdValidator, handleInputErrors]

const update = [
  titleValidator,
  showIdValidator,
  idParamValidator,
  handleInputErrors,
]

const show = [
  idParamValidator,
  pageQueryValidator,
  limitQueryValidator,
  handleInputErrors,
]

const destroy = [idParamValidator, handleInputErrors]

export { create, update, show, destroy }
