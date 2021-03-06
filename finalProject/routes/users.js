var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //mongo connection
var User = require('../model/user');
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
var config = require('../config/config');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));

mongoose.connect(config.database);

/* GET users listing. */
router.get('/', function(req, res) {
    User.find(function(err,users){
        if(err){
            return console.log(err);
        }else{
            res.send(users);
        }
    });
});

router.post('/',check_scopes(),function(req,res,next){
    var newUser = new User();
    User.findOne({'userInfo.username':req.body.username},function(err,user){
        if(err){
            throw err
        }
        if(user==null || undefined){
            newUser.userInfo.username = req.body.username;
            newUser.userInfo.password = req.body.password;
            newUser.userInfo.admin = req.body.admin;

            if((newUser.userInfo.admin && newUser.userInfo.password)!=undefined){
                newUser.save(function(err){
                    if(err){
                        return res.send(err);
                    }
                    res.send({message:'user added'})
                });
            }else{
                res.status(400);
                res.send({message:"incomplete information"});
            }
        }else{
            res.status(400);
            res.send({message:"the user already exist"});
        }
    });
});

router.put('/:id',check_scopes(),function(req,resp){
    var name = req.body.username;
    console.log(req.body.username);
    var password = req.body.password;
    User.findById(req.params.id,function(err,user){
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

router.delete('/:id',check_scopes(),function(req,resp){
    User.findById(req.params.id,function(err,user){
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

function check_scopes() {
    return function(req, res, next) {
        User.findOne({'userInfo.username':req.token_payload.username},function(err,user){
            if(err) throw err

            if(user.userInfo.admin){
                return next();
            }
            return res.send(401, {message:"permission denied"});
        });
    }
}
module.exports = router;
