import express from 'express'
import { router } from './router'
import morgan from 'morgan'
import * as authController from './controllers/auth.controller'

export const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/register', authController.register)
app.post('/login', authController.login)

app.use('/api', router)
