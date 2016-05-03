var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //mongo connection
var User = require('../model/user');
bodyParser = require('body-parser'), //parses information from POST
methodOverride = require('method-override'); //used to manipulate POST

var userSchema = new mongoose.Schema({
    name:{type:String},
    LastName:{type:String},
    email:{type:String},
    dob:{type: Date, default: Date.now},
    isAdmin:{type:Boolean}
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

    console.log(req.body.name);
    console.log(req.body.password);

    var newUser = new User();
    newUser.local.username = req.body.name;
    newUser.local.password = req.body.password;
    console.log(newUser);
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
    var userModel = new User();
    userModel.findById(req.id,function(err,user){
        user.update({
            name:name,
            password:password
        },function(err,userId){
            if(err){
                res.send("There was a problem, it couldn't update");
            }else{
                res.redirect('/users')
            }
        })
    })
});
module.exports = router;
