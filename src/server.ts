import express from 'express'
import { router } from './router'
import morgan from 'morgan'
import { protect } from './modules/auth'
import * as authController from './controllers/auth.controller'
import * as authValidator from './validators/auth.validator'

export const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/register', authValidator.register, authController.register)
app.post('/login', authValidator.login, authController.login)

app.use('/api', protect, router)
