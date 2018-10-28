const Util = require('../utils/util')

module.exports = {
  async signupPageData (ctx, _nuxt) {
    const c = Util.captcha()
    ctx.session.captcha = c.text
    ctx.body = c.data
  }
}