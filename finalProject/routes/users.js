var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //mongo connection
var User = require('../model/user');
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
//var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    name:{type:String},
    createdAt:{type: Date, default: Date.now}
});

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));

mongoose.connect('mongodb://localhost/userdb');


mongoose.model('users',userSchema);

/* GET users listing. */
router.get('/', function(req, res) {
    mongoose.model('users').find(function(err,users){
        if(err){
            return console.log(err);
        }else{
            res.send(users);
        }
    });
});

router.post('/',function(req,res){
    var newUser = new User();
    newUser.userInfo.username = req.body.name;
    newUser.userInfo.password = req.body.password;
    newUser.userInfo.admin = req.body.admin;
    newUser.save(function(err){
        if(err){
            return res.send(err);
        }
        res.send({message:'user added'})
    })
});

router.put('/:id',function(req,resp){
    var name = req.body.name;
    var password = req.body.password;
    mongoose.model('User').findById(req.params.id,function(err,user){
        if(user!=null){
            user.update({
                userInfo:{
                    username:name,
                    password:password
                }
            },function(err,success){
                if(err){
                    resp.send("There was a problem, it couldn't update");
                }else{
                    resp.send({message:'update success'});
                }
            })
        }else{
            resp.send({message:"the user doesn't exist"});
        }
    })
});

router.delete('/:id',function(req,resp){
    mongoose.model('User').findById(req.params.id,function(err,user){
        if(err){
            resp.send({message:err});
        }else{
            if(user!=null){
                user.remove(function(err,user){
                    if(err){
                        resp.send("there was an error " + err);
                    } else{
                        resp.send({message:"user deleted"});
                    }
                });
            }else{
                resp.send({message:"the user doesn't exist"})
            }
        }
    });
});

module.exports = router;
