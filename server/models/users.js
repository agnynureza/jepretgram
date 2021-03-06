const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    username: String,
    password: String,
    role    : String
  },{
    timestamps: true
  });

module.exports = mongoose.model('User', userSchema);