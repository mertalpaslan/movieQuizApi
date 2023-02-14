import { body, param } from 'express-validator'
import { handleInputErrors } from './error'

const titleValidator = body('title').isString().isLength({ min: 4, max: 255 })
const idParamValidator = param('id').isInt()

const create = [titleValidator, handleInputErrors]

const update = [titleValidator, idParamValidator, handleInputErrors]

const show = [idParamValidator, handleInputErrors]

const destroy = [idParamValidator, handleInputErrors]

export { create, update, show, destroy }
