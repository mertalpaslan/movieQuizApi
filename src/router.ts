import * as showController from './controllers/show.controller'
import * as showValidator from './validators/show.validator'
import * as quizController from './controllers/quiz.controller'
import * as quizValidator from './validators/quiz.validator'
import * as questionController from './controllers/question.controller'
import * as questionValidator from './validators/question.validator'

import { Router } from 'express'

export const router = Router()

router.get('/shows', showController.index)
router.get('/show/:id', showValidator.show, showController.show)
router.post('/show', showValidator.create, showController.create)
router.put('/show/:id', showValidator.update, showController.update)
router.delete('/show/:id', showValidator.destroy, showController.destroy)

router.get('/quizzes', quizController.index)
router.get('/quiz/:id', quizValidator.show, quizController.show)
router.post('/quiz', quizValidator.create, quizController.create)
router.put('/quiz/:id', quizValidator.update, quizController.update)
router.delete('/quiz/:id', quizValidator.destroy, quizController.destroy)

router.get('/question/:id', questionValidator.show, questionController.show)
router.post('/question', questionValidator.create, questionController.create)
router.put('/question/:id', questionValidator.update, questionController.update)
router.delete(
  '/question/:id',
  questionValidator.destroy,
  questionController.destroy,
)
