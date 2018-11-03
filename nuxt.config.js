const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '大有折扣网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** 自定义顶部请求条
  */
  loading: { color: '#f00' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/common.less',
    'element-ui/packages/theme-chalk/lib/button.css',
    'element-ui/packages/theme-chalk/lib/pagination.css',
    'element-ui/packages/theme-chalk/lib/carousel.css',
    'element-ui/packages/theme-chalk/lib/carousel-item.css',
  ],

  /**
   * 该选项为配置插件
   * 可以配置只在 Vue 实例中使用，也可以配置在服务端使用，也可以联合注入(Vue实例和服务端同时使用)
   */
  plugins: [
    '~/plugins/axiosPlugin.js',
    '~/plugins/element-ui.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    // 有一个值得注意的问题是，如果我们在另外一个页面内也引用了 axios，
    // 那么在应用打包发布的时候 axios 会被打包两次，而实际上我们只需要打包一次，所以配置vendor
    vendor: ['axios'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    },
    // element-ui 按需加载配置
    babel: {
      plugins: [
        ['component', {
          'libraryName': 'element-ui',
          'styleLibraryName': 'theme-chalk'
        }]
      ]
    }
  }
}
