const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var UserSchema = new mongoose.Schema({
  username:  String,
  password: String,
  salt:   String,
  subscriptions: [{ channelId: String}],
  tags: [{tag: String}],
  views: [{videoId: String, date: Date}],
  firstName: String,
  lastName: String,
  country:   String,
  state: String,
  city: String,
  dob: Date,
  email: String
});

let User = mongoose.model('User', UserSchema);

module.exports = User;