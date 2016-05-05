/**
 * Created by mauro on 03/05/16.
 */

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
    userInfo:{
        username: String,
        password:String,
        admin:Boolean
    }
},{ versionKey: false });

/*
userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
*/

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    console.log(candidatePassword);
    console.log("this.userInfo.password "+this.userInfo.password);
    var the_password = this.userInfo.password;
    bcrypt.compare(candidatePassword, the_password, function(err, isMatch) {
        console.log(isMatch);
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User',userSchema);