const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const User = require('./models/User.js')

//parses incoming request body, only json because we are expecting put request from a server side application
app.use(bodyParser.json());

app.put('/user/:userId', function(req, res) {
  let {body} = req;
  let {video, tags} = body;
  let id = req.params.userId;

  User.update({ _id: id }, { $push: { views: video, tags: tags}}, function(err, res) {
    console.log(res, "<========user updated!")
  })
})

app.get('/user/:userId', function(req, res) {
  let id = req.params.userId
  console.log(id, "<========== id!!!!")
  User.findById(id, function(err, result) {
    if(err) {
      console.error(err)
    } else {
    console.log(result, "user request processed");
    res.send(result)
    }
  })
})

app.listen(3001);