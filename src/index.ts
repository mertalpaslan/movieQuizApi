import { app } from './server'
import config from '../config/index'

app.listen(config.port, () => {
  console.log(`Listening on ${config.port}`)
})
