/**
 * 联合注入 axios 插件，该插件可以在 Vue 实例 和 服务端 content(ctx) 中使用
 * 在Vue的实例中使用：this.$axios
 * 在 asyncData 中使用：ctx.app.$axios （注意asyncData 函数需要传递ctx参数）
 */

import axios from 'axios'

const port = process.env.NODE_ENV === 'development' ? 3000 : 3302

const request = axios.create({
  baseURL: 'http://127.0.0.1:' + port,
  timeout: 5000
})

export default ({ app }, inject) => {
  inject('axios', request)
}