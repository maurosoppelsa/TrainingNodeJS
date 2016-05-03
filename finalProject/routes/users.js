var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/userdb');
mongoose.model('users',{name:String});
/* GET users listing. */
router.get('/', function(req, res, next) {
    mongoose.model('users').find(function(err,users){
      res.send(users);
    });
});

module.exports = router;
