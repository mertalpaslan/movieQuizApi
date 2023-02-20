import { prisma } from '../db'

const getAllByUser = (userId) => {
  return prisma.question.findMany({
    where: {
      creatorId: userId,
    },
  })
}

const getAnswers = (id) => {
  return prisma.question.findUnique({
    where: {
      id: id,
    },
    include: {
      answers: true,
    },
  })
}
const create = (user_id, data) => {
  const { answers, ...quizFields } = data

  return prisma.question.create({
    data: {
      creatorId: user_id,
      ...quizFields,
      answers: {
        create: answers,
      },
    },
    include: { answers: true },
  })
}

const update = (user_id, id, data) => {
  return prisma.question.update({
    where: {
      id: id,
    },
    data: { creatorId: user_id, ...data, answers: {} },
  })
}

const destroy = (id) => {
  return prisma.quiz.delete({
    where: {
      id: id,
    },
  })
}

export { getAllByUser, getAnswers, create, update, destroy }
