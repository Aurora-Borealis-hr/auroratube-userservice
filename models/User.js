const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/userservice');

var UserSchema = new mongoose.Schema({
  username:  String,
  subscriptions: [],
  tags: [],
  country:   String,
  state: String,
  city: String,
  dob: Date,
  email: String
});

let User = mongoose.model('User', UserSchema);

module.exports = User;