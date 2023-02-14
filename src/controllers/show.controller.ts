import * as showService from '../services/show.service'

const index = async (req, res) => {
  const shows = await showService.getAllByUser(req.user.id)

  res.json({ data: shows })
}

const show = async (req, res) => {
  const show = await showService.getQuizzes(Number(req.params.id))

  res.json({ data: show })
}

const create = async (req, res) => {
  const show = await showService.create(req.user.id, req.body)

  res.json({ data: show })
}

const update = async (req, res) => {
  const show = await showService.update(
    req.user.id,
    Number(req.params.id),
    req.body,
  )

  res.json({ data: show })
}

const destroy = async (req, res) => {
  const show = await showService.destroy(Number(req.params.id))

  res.json({ data: show })
}

export { index, show, create, update, destroy }
