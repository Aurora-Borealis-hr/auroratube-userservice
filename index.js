const express = require('express');
const app = express();

const User = require('./models/User.js')

//parses incoming request body, only json because we are expecting put request from a server side application
app.use(bodyParser.json());

app.put('/user/:userId', function(req, res) {
  let {body} = req;
  let {video, tags} = body;
  let id = req.param.userId;

  User.update({ _id: id }, { $push: { views: video }, {tags: tags} }, function(err, res) {
    console.log("user updated!")
  });

})

app.get('/user/:userId', function(req, res) {
  let id = req.param.userId;
  User.findOne({_id: id}, function(err, result) {
    console.log("user request processed");
    res.send(result)
  })
};)

app.listen(3001);