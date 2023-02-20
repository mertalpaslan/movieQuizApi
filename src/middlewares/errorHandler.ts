export default (e, req, res, next) => {
  console.log(e)
  const status = e.statusCode || 400
  const message = e.message || 'Something went wrong'
  res.status(status).json({
    message,
    success: false,
    ...(process.env.NODE_ENV === 'development' && { stack: e.stack }),
  })
}
