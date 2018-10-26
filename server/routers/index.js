// 自动加载并装载路由；

const router = require('koa-router')()
const path = require('path')
const fs = require('fs')

// 获取当前文件的文件名.扩展名 (index.js); module.filename === __filename
const basename = path.basename(__filename)

fs.readdirSync(__dirname) // 返回一个数组
  .filter(file => {
    return (file.indexOf('.') !== 0 && (file !== basename) && file.endsWith('.js'))
  })
  .forEach(file => {
    // let name = file.substring(0, file.length - 3)
    console.log(`import controller from file ${file}...`)
    let route = require(path.join(__dirname, file));
    router.use('/api', route.routes(), route.allowedMethods())
  })

module.exports = router

// 另一种写法：
// module.exports = app => {
//   // 获取当前文件的文件名.扩展名 (index.js); module.filename === __filename
//   const basename = path.basename(__filename)

//   fs.readdirSync(__dirname) // 返回一个数组
//     .filter(file => {
//       return (file.indexOf('.') !== 0 && (file !== basename) && file.endsWith('.js'))
//     })
//     .forEach(file => {
//       // let name = file.substring(0, file.length - 3)
//       console.log(`import controller from file ${file}...`)
//       let route = require(path.join(__dirname, file));
//       router.use('/api', route.routes(), route.allowedMethods())
//       app.use(router.routes(), router.allowedMethods())
//     })
// }
