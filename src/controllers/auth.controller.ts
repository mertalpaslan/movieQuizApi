import * as userService from '../services/user.service'
import { createJWT } from '../modules/auth'

export const login = async (req, res) => {
  const user = await userService.verify(req.body)

  if (user) {
    res.json(createJWT(user))
  } else {
    res.status(401)
    res.json({ message: 'User not found!' })
  }
}

export const register = async (req, res) => {
  const user = await userService.create(req.body)

  if (user) {
    res.json(createJWT(user))
  } else {
    res.status(401)
    res.json({ message: 'User not created!' })
  }
}
