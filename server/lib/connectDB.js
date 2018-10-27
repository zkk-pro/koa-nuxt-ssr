/**
 * 连接 MongoDB 数据库
 */

 const mongoose = require('mongoose')
 const sConfig = require('../config/config')

 mongoose.Promise = global.Promise

 mongoose.connect(sConfig.mongodb, { useNewUrlParser: true })

 const db = mongoose.connection

 db.on('error', error => {
   console.log('数据库连接失败：' + error)
 })

 db.on('open', () => {
   console.log('数据库连接成功')
 })