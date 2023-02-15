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
    { expiresIn: '8h' },
  )

  return token
}

export const protect = (req, res, next) => {
  const [_, token] = req.headers.authorization.split(' ')
  if (!token) {
    res.status(401).json({ message: 'Not Authorized!' })
  } else {
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET)
      req.user = user
      next()
    } catch (e) {
      if (e.name === 'TokenExpiredError') {
        res.status(401).json({ message: 'Token Expired!' })
      } else {
        res.status(401).json({ message: 'Invalid Token!' })
      }
    }
  }
}
