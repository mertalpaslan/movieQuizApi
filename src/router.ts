import * as quizController from './controllers/quiz.controller'
import { Router } from 'express'

export const router = Router()

router.get('/quizzes', quizController.index)
router.get('/quiz/:id', quizController.show)
router.post('/quiz', quizController.create)
router.put('/quiz/:id', quizController.update)
router.delete('/quiz/:id', quizController.destroy)
