import * as userService from '../services/user.service'
import { createJWT } from '../modules/auth'

export const login = (req, res, next) => {
  userService
    .verify(req.body)
    .then((user) => {
      res.send(createJWT(user))
    })
    .catch(next)
}

export const register = (req, res, next) => {
  userService
    .create(req.body)
    .then((user) => {
      res.json(createJWT(user))
    })
    .catch(next)
}
