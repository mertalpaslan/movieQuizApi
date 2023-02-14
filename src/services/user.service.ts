import { prisma } from '../db'
import { comparePasswords, hashPassword } from '../modules/auth'

export const create = async (data) => {
  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: await hashPassword(data.password),
    },
  })

  return user
}

export const verify = async (data) => {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  })

  if (user && (await comparePasswords(data.password, user.password))) {
    return user
  } else {
    return false
  }
}
