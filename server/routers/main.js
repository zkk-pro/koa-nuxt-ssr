const Router = require('koa-router')

const router = Router({
  prefix: '/main'
})

router.get('/goodsList', async ctx => {
  ctx.body = [
    {name: 'book', price: 88}
  ]
})

module.exports = router