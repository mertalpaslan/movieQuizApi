import * as showService from '../services/show.service'

const index = (req, res, next) => {
  showService
    .getAllByUser(req.user.id)
    .then((data) => {
      res.json(data)
    })
    .catch(next)
}

const show = (req, res, next) => {
  showService
    .getQuizzes(Number(req.params.id))
    .then((data) => {
      res.json(data)
    })
    .catch(next)
}

const create = (req, res, next) => {
  showService
    .create(req.user.id, req.body)
    .then((data) => {
      res.json(data)
    })
    .catch(next)
}

const update = (req, res, next) => {
  showService
    .update(req.user.id, Number(req.params.id), req.body)
    .then((data) => {
      res.json(data)
    })
    .catch(next)
}

const destroy = (req, res, next) => {
  showService
    .destroy(Number(req.params.id))
    .then((data) => {
      res.json(data)
    })
    .catch(next)
}

export { index, show, create, update, destroy }
