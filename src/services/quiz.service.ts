import { prisma } from '../db'

const getAllByUser = (userId) => {
  return prisma.quiz.findMany({
    where: {
      creatorId: userId,
    },
  })
}

const getQuestionsByPage = (id, page = 1, limit = 5) => {
  const skip = (page - 1) * limit

  return prisma.quiz.findUnique({
    where: {
      id: id,
    },
    include: {
      questions: {
        skip: skip,
        take: limit,
        include: {
          answers: true,
        },
      },
    },
  })
}
const create = (user_id, data) => {
  return prisma.quiz.create({
    data: { creatorId: user_id, ...data },
  })
}

const update = (user_id, id, data) => {
  return prisma.quiz.update({
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

export { getAllByUser, getQuestionsByPage, create, update, destroy }
