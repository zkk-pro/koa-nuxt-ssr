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
  }
}