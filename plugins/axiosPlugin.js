/**
 * 联合注入 axios 插件，该插件可以在 Vue 实例 和 服务端 content(ctx) 中使用
 * 在Vue的实例中使用：this.$axios
 * 在 asyncData 中使用：ctx.app.$axios （注意asyncData 函数需要传递ctx参数）
 */

import axios from 'axios'

export default ({ app }, inject) => {
  inject('axios', axios)
}