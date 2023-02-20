import { prisma } from '../db'

const getAllByUser = (userId) => {
  return prisma.show.findMany({
    where: {
      creatorId: userId,
    },
  })
}

const getQuizzes = (id) => {
  return prisma.show.findUnique({
    where: {
      id: id,
    },
    include: {
      quizzes: true,
    },
  })
}
const create = (user_id, data) => {
  return prisma.show.create({
    data: { creatorId: user_id, ...data },
  })
}

const update = (user_id, id, data) => {
  return prisma.show.update({
    where: {
      id: id,
    },
    data: { creatorId: user_id, ...data },
  })
}

const destroy = (id) => {
  return prisma.quiz.delete({
    where: {
      id: id,
    },
  })
}

export { getAllByUser, getQuizzes, create, update, destroy }
