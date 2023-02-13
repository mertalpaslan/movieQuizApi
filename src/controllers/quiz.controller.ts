import * as quizService from '../services/quiz.service'

const index = (req, res) => {
  res.send(quizService.getAll())
}

const show = (req, res) => {
  res.send(quizService.get(req.params.id))
}

const create = (req, res) => {
  res.send(quizService.create(req.body))
}

const update = (req, res) => {
  res.send(quizService.update(req.params.id, req.body))
}

const destroy = (req, res) => {
  res.send(quizService.destroy(req.params.id))
}

export { index, show, create, update, destroy }
