
const Koa = require('koa')
const consola = require('consola') // 彩色的console.log
const { Nuxt, Builder } = require('nuxt')
const router = require('./routers')
const bodyParser = require('koa-bodyparser')
const connectDB = require('./lib/connectDB') // 连接数据库
const sConfig = require('./config/config')

const app = new Koa()
// const host = process.env.HOST || '127.0.0.1'
// const port = process.env.PORT || 3000
const host = sConfig.host
const port = sConfig.port

consola.log('current env:' + app.env)

// 导入并设置 Nuxt.js 选项
let config = require('../nuxt.config.js')

config.dev = !(app.env === 'production')

async function start() {
  // 实例化 Nuxt
  const nuxt = new Nuxt(config)

  // 开发环境下的打包
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  
  // post解析
  app.use(bodyParser())
  // 路由
  // router(app) // 另一种写法的路由使用
  app.use(router.routes(), router.allowedMethods())

  app.use(ctx => {
    ctx.status = 200 // 当没有设置状态时，koa 默认状态为 404

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt 渲染错误会 reject 一个 promise
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  // 彩色的console.log() ready:绿色；error: 红色；...
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
