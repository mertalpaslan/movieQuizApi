import * as quizController from './controllers/quiz.controller'
import * as quizValidator from './validators/quiz.validator'
import { Router } from 'express'

export const router = Router()

router.get('/quizzes', quizController.index)
router.get('/quiz/:id', quizValidator.show, quizController.show)
router.post('/quiz', quizValidator.create, quizController.create)
router.put('/quiz/:id', quizValidator.update, quizController.update)
router.delete('/quiz/:id', quizValidator.destroy, quizController.destroy)
