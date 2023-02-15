process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envConfig = require(`./${process.env.NODE_ENV}`).default

const defaultConfig = {
  env: process.env.NODE_ENV,
  port: 3001,
  secrets: {
    jwt: process.env.JWT_SECRET,
    dbUrl: process.env.DATABASE_URL,
  },
}

export default { ...defaultConfig, ...envConfig }
