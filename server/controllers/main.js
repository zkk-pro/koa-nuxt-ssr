
const Util = require('../utils/util')
const bcrypt = require('bcryptjs')
const UserModel = require('../models/users')

module.exports = {
  async signup (ctx, next) {
    console.log(ctx.request.body)
    let {username, email, password, repassword } = ctx.request.body

    if (Util.illegalCharacter(username)) {
      return ctx.body = '用户名非法字符'
    }
    if (Util.checkEmail(email)) {
      return ctx.body = '邮箱有误'
    }
    const salt = await bcrypt.genSalt(10) // 生成盐
    password = bcrypt.hash(password, salt) // 加密

    let user = {
      username,
      password,
      email
    }
    
    // 存入数据库
    try{
      await UserModel.User.create(user)
      ctx.body = '注册成功'
    } catch(err) {
      ctx.body = err
    }
  }
}