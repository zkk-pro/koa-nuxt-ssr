
const Util = require('../utils/util')
const bcrypt = require('bcryptjs')
const UserModel = require('../models/users')
const rs = require('../lib/resData')

module.exports = {
  async signup (ctx, _next) {
    let {username, email, password, repassword } = ctx.request.body

    if (Util.illegalCharacter(username)) {
      console.log(rs.resData)
      return ctx.body = await rs({msg: '非法用户名'})
    }

    // 判断数据库是否存在该注册邮箱
    let findEmail = await UserModel.User.findOne({email})
    if (findEmail) {
      return ctx.body = await rs({msg: '该邮箱已注册'})
    }
    // 检测邮箱有效性
    if (Util.checkEmail(email)) {
      return ctx.body = await rs({msg: '邮箱有误'})
    }
    // 判断两次输入的密码是否一致
    if (password !== repassword) {
      return ctx.body = await rs({msg: '两次输入的密码不一致'})
    }

    const salt = await bcrypt.genSalt(10) // 生成盐
    password = await bcrypt.hash(password, salt) // 加密

    let user = {
      username,
      password,
      email
    }
    
    // 存入数据库
    try{
      await UserModel.User.create(user)
      ctx.body = await rs({code: 1000, msg: '注册成功'})
    } catch(err) {
      ctx.body = await rs({code: 1002, msg: err.message})
    }
  },

  // 登入
  async signin(ctx, _nuxt) {
    let { email, password } = ctx.request.body
    // 根据用户的email查询该用户
    let user = await UserModel.User.findOne({email})
    // 判断是否存在该用户 如果存在 拿到密码跟数据库的密码做对比
    if (user && await bcrypt.compare(password, user.password)) {
      ctx.session.user = {
        username: user.username,
        email: user.email
      }
      ctx.body = await rs({code: 1000, msg: '登录成功'})
    } else {
      ctx.body = await rs({msg: '邮箱或密码错误'})
    }
  }
}