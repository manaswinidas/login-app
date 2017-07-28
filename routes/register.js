var express = require('express');
var user = require('../models/user/user.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function(req, res, next){
  var newUser = new user({
    name : req.body.name,
    username : req.body.username,
    password : req.body.pword
  });
  newUser.save(function(err){
    if (err){
      console.log("Handle Error");
    }
  });
  res.send("Success");


});

module.exports = router;
