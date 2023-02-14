import { prisma } from '../db'

const getAllByUser = async (userId) => {
  const questions = await prisma.question.findMany({
    where: {
      creatorId: userId,
    },
  })

  return questions
}

const getAnswers = async (id) => {
  const question = await prisma.question.findUnique({
    where: {
      id: id,
    },
    include: {
      answers: true,
    },
  })

  return question
}
const create = async (user_id, data) => {
  const question = await prisma.question.create({
    data: { creatorId: user_id, ...data },
  })

  return question
}

const update = async (user_id, id, data) => {
  const question = await prisma.question.update({
    where: {
      id: id,
    },
    data: { creatorId: user_id, ...data },
  })

  return question
}

const destroy = async (id) => {
  const quiz = await prisma.quiz.delete({
    where: {
      id: id,
    },
  })

  return quiz
}

export { getAllByUser, getAnswers, create, update, destroy }
