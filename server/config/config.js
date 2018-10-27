const development = require('./development')
const production = require('./production')

const env = process.env.NODE_ENV || 'development'

const configs = {
  development,
  production
}

const config = configs[env]

module.exports = config