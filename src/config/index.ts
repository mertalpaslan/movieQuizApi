process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.STAGE = process.env.STAGE || 'development'

const envConfig = require(`./${process.env.STAGE}`).default

const defaultConfig = {
  stage: process.env.STAGE,
  env: process.env.NODE_ENV,
  dbUrl: process.env.DATABASE_URL,
  port: process.env.PORT,
  secrets: {
    jwt: process.env.JWT_SECRET,
  },
}

export default { ...defaultConfig, ...envConfig }
