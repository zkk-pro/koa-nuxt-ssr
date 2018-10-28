const svgCaptcha = require('svg-captcha')


module.exports = {
  // 是否包含非法字符
  illegalCharacter(str) {
    let RE = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&* \\\\（）——|{}【】‘；：”“'。，、？%+_]")
    if (RE.test(str) || str.length < 3 || str.length > 12 || !str) return true
  },

  // 邮箱验证
  checkEmail(str) {
    let RE = /^[a-z0-9A-Z_.-]{5,16}@{1}(qq|163|gmail|126).com$/
    if (!RE.test(str) || !str) return true
  },

  // 图形验证码
  captcha() {
    // 配置
    let options = {
      width: 80,
      height: 38,
      size: 4, // 验证码长度
      ignoreChars: 'o01ilLI', // 验证码字符串中排除的字符
      noise: 1, // 干扰线条
      color: false, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
      background: '#ccc' // 验证码图片背景颜色
    }
    const c = svgCaptcha.create(options)
    return c
  }
}