import * as quizService from '../services/quiz.service'

const index = async (req, res) => {
  const quizzes = await quizService.getAllByUser(req.user.id)

  res.json({ data: quizzes })
}

const show = async (req, res) => {
  const quiz = await quizService.getQuestions(Number(req.params.id))

  res.json({ data: quiz })
}

const create = async (req, res) => {
  const quiz = await quizService.create(req.user.id, req.body)

  res.json({ data: quiz })
}

const update = async (req, res) => {
  const quiz = await quizService.update(
    req.user.id,
    Number(req.params.id),
    req.body,
  )

  res.json({ data: quiz })
}

const destroy = async (req, res) => {
  const quiz = await quizService.destroy(Number(req.params.id))

  res.json({ data: quiz })
}

export { index, show, create, update, destroy }
