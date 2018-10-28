/**
 * @param {code} 状态码，默认为1001
 *    1001 客户端请求错误
 *    1002 服务器错误
 * @param {msg} 提示信息
 * @param {data} 需要返回的数据 
 */

const resData = async ({code = 1001, msg = '', data}) => {
  return {code, msg, data}
}

module.exports = resData