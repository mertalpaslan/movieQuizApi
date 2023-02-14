import { prisma } from '../db'

const getAllByUser = async (userId) => {
  const quizzes = await prisma.quiz.findMany({
    where: {
      creatorId: userId,
    },
  })

  return quizzes
}

const getQuestions = async (id) => {
  const quiz = await prisma.quiz.findUnique({
    where: {
      id: id,
    },
    include: {
      questions: true,
    },
  })

  return quiz
}
const create = async (user_id, data) => {
  const quiz = await prisma.quiz.create({
    data: { creatorId: user_id, ...data },
  })

  return quiz
}

const update = async (user_id, id, data) => {
  const quiz = await prisma.quiz.update({
    where: {
      id: id,
    },
    data: { creatorId: user_id, ...data },
  })

  return quiz
}

const destroy = async (id) => {
  const quiz = await prisma.quiz.delete({
    where: {
      id: id,
    },
  })

  return quiz
}

export { getAllByUser, getQuestions, create, update, destroy }
