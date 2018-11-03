// const development = require('./development')
// const production = require('./production')

// const env = process.env.NODE_ENV || 'development'
// console.log('current ENV is：' + env)

// const configs = {
//   development,
//   production
// }

// const config = configs[env]

/**
 * 配置文件
 */

const port = process.env.NODE_ENV === 'development' ? 3000 : 3302
const mongodbUrl = process.env.NODE_ENV === 'development' 
  ? 'mongodb://localhost:27017/Mall'
  : 'mongodb://dev:dev123@119.29.149.100:27017/Mall'

module.exports = config = {
  port,
  host: '127.0.0.1',
  // mongodb: 'mongodb://localhost:27017/Mall',
  mongodb: mongodbUrl,
  session: {
    key: 'descount_mall',
    maxAge: 86400000
  }
}