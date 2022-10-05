/* USER SCHEMA TO MAKE USER ACCOUNTS*/
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema

const Users = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
});

Users.plugin(passportLocalMongoose)

const model = mongoose.model('Users', Users)

module.exports = model