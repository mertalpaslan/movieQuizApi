import * as questionService from '../services/question.service'

const index = async (req, res) => {
  const questions = await questionService.getAllByUser(req.user.id)

  res.json({ data: questions })
}

const show = async (req, res) => {
  const question = await questionService.getAnswers(Number(req.params.id))

  res.json({ data: question })
}

const create = async (req, res) => {
  const question = await questionService.create(req.user.id, req.body)

  res.json({ data: question })
}

const update = async (req, res) => {
  const question = await questionService.update(
    req.user.id,
    Number(req.params.id),
    req.body,
  )

  res.json({ data: question })
}

const destroy = async (req, res) => {
  const question = await questionService.destroy(Number(req.params.id))

  res.json({ data: question })
}

export { index, show, create, update, destroy }
