import * as questionService from '../services/question.service'

const show = (req, res, next) => {
  questionService
    .getAnswers(req.params.id)
    .then((data) => {
      res.json({ data })
    })
    .catch(next)
}

const create = (req, res, next) => {
  questionService
    .create(req.user.id, req.body)
    .then((data) => {
      res.json(data)
    })
    .catch(next)
}

const update = (req, res, next) => {
  questionService
    .update(req.user.id, Number(req.params.id), req.body)
    .then((data) => {
      res.json(data)
    })
    .catch(next)
}

const destroy = (req, res, next) => {
  questionService
    .destroy(req.params.id)
    .then((data) => {
      res.json({ data })
    })
    .catch(next)
}

export { show, create, update, destroy }
