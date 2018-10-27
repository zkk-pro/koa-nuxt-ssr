const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    // unqire: true // 唯一的，不可重复的
  },
  email: {
    type: String,
    required: true,
    // unqire: true // 唯一的，不可重复的
  },
  password: {
    type: String,
    required: true
  },
})

const User = mongoose.model('User', userSchema)

module.exports = {
  User
}