const Router = require('koa-router')
const main = require('../controllers/main')

const router = Router({
  // prefix: '/'
})

router.get('/goodsList', async ctx => {
  ctx.body = [
    {name: 'book', price: 88}
  ]
})
// 注册
router.post('/signup', main.signup)

module.exports = router