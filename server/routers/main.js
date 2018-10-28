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
// 登录
router.post('/signin', main.signin)
// 获取图片验证码
router.get('/captcha', main.captcha)

module.exports = router