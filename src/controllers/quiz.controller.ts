import * as quizService from '../services/quiz.service'

const index = (req, res, next) => {
  quizService
    .getAllByUser(req.user.id)
    .then((data) => {
      res.json(data)
    })
    .catch(next)
}

const show = (req, res, next) => {
  quizService
    .getQuestionsByPage(req.params.id, req.query.page, req.query.limit)
    .then((data) => {
      res.json(data)
    })
    .catch(next)
}

const create = (req, res, next) => {
  quizService
    .create(req.user.id, req.body)
    .then((data) => {
      res.json(data)
    })
    .catch(next)
}

const update = (req, res, next) => {
  quizService
    .update(req.user.id, Number(req.params.id), req.body)
    .then((data) => {
      res.json(data)
    })
    .catch(next)
}

const destroy = (req, res, next) => {
  quizService
    .destroy(req.params.id)
    .then((data) => {
      res.json(data)
    })
    .catch(next)
}
export { index, show, create, update, destroy }
