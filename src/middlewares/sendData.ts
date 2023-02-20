export default function (data, req, res, next) {
  if (data instanceof Error) {
    return next(data)
  } else {
    res.json({ data })
  }
}
