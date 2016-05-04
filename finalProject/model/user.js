/**
 * Created by mauro on 03/05/16.
 */

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userInfo:{
        username: String,
        password:String
    }
});

module.exports = mongoose.model('User',userSchema);