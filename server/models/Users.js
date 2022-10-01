/* USER SCHEMA TO MAKE USER ACCOUNTS*/
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Users = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
});

const model = mongoose.model('Users', Users)

module.exports = model