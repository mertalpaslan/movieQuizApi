import { prisma } from '../db'
import { comparePasswords, hashPassword } from '../modules/auth'

export const create = async (data) => {
  return prisma.user.create({
    data: {
      email: data.email,
      password: await hashPassword(data.password),
    },
  })
}

export const verify = (data) => {
  return new Promise((resolve, reject) => {
    prisma.user
      .findUnique({
        where: {
          email: data.email,
        },
      })
      .then((user) => {
        if (user) {
          comparePasswords(data.password, user.password).then((isVerified) => {
            if (isVerified) {
              resolve(user)
            } else {
              reject(new Error('Wrong password!'))
            }
          })
        } else {
          reject(new Error('User not found!'))
        }
      })
  })
}
