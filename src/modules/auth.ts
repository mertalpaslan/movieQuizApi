import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const comparePasswords = (password, hash) => {
  return bycrypt.compare(password, hash)
}

export const hashPassword = (password) => {
  return bycrypt.hash(password, 5)
}

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
  )

  return token
}
