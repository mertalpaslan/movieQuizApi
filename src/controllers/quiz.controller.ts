import * as quizService from '../services/quiz.service'

const index = async (req, res) => {
  const quizzes = await quizService.getAllByUser(req.user.id)

  res.json({ data: quizzes })
}

const show = (req, res) => {
  quizService
    .getQuestionsByPage(req.params.id, req.query.page, req.query.limit)
    .then((quiz) => {
      res.json({ data: quiz })
    })
    .catch((e) => {
      res.status(401).json({ error: e })
    })
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

const destroy = (req, res) => {
  quizService
    .destroy(req.params.id)
    .then((quiz) => res.json(quiz))
    .catch((e) => res.status(401).json({ error: e }))
}

export { index, show, create, update, destroy }
