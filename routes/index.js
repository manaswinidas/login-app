var express = require('express');
var user = require('../models/user/user.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req,res, next){
    user.findOne({
      username: req.body.username,
      password: req.body.password
    }).then((user) => {
      console.log(user);
      if (user) {
        // user exists
        res.send("Login successful");
      } else {
        // user does not exist
        res.send("Register");
      }
    }).catch((err) => next(err));
});

module.exports = router;
