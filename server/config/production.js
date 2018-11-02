/**
 * 生产模式下的配置
 */

const port = Number.parseInt(process.env.PORT) || 3302

module.exports = {
  port,
  host: '127.0.0.1',
  mongodb: 'mongodb://localhost:27017/Mall',
  session: {
    key: 'descount_mall',
    maxAge: 86400000
  }
}