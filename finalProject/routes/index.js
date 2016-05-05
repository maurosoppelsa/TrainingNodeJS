var express = require('express');
var router = express.Router();
var User = require('../model/user');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',function(req,resp){
  if(!req.body.username){
    resp.status(400).send("username required");
    return;
  }
  if(!req.body.password){
    resp.send(400).send("password required");
    return;
  }
  User.findOne({'userInfo.username':req.body.username},function(err,user){
    user.comparePassword(req.body.password,function(err,isMatch){
      if(err) throw err;
      if(isMatch){
        resp.status(401).send('Invalid Password');
      }else{
        var token = jwt.sign({username:req.body.username},config.secret);
        resp.status(200).json(token);
      }
    });
  });

});

module.exports = router;
