/**
 * 生产模式下的配置
 */

const port = Number.parseInt(process.env.PORT) || 3302

module.exports = {
  port,
  hostName: process.env.HOST_NAME,
  mongodb: process.env.MONGODB,
  session: {
    key: 'descount_mall',
    maxAge: 86400000
  }
}