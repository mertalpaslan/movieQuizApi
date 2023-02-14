import { prisma } from '../db'

const getAllByUser = async (userId) => {
  const shows = await prisma.show.findMany({
    where: {
      creatorId: userId,
    },
  })

  return shows
}

const getQuizzes = async (id) => {
  const show = await prisma.show.findUnique({
    where: {
      id: id,
    },
    include: {
      quizzes: true,
    },
  })

  return show
}
const create = async (user_id, data) => {
  const show = await prisma.show.create({
    data: { creatorId: user_id, ...data },
  })

  return show
}

const update = async (user_id, id, data) => {
  const show = await prisma.show.update({
    where: {
      id: id,
    },
    data: { creatorId: user_id, ...data },
  })

  return show
}

const destroy = async (id) => {
  const quiz = await prisma.quiz.delete({
    where: {
      id: id,
    },
  })

  return quiz
}

export { getAllByUser, getQuizzes, create, update, destroy }
