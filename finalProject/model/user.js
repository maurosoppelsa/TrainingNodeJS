/**
 * Created by mauro on 03/05/16.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;

var userSchema = mongoose.Schema({
    userInfo:{
        username: String,
        password:String,
        admin:Boolean,
        createdAt:{type: Date, default: Date.now}
    }
},{ versionKey: false });


userSchema.pre('save', function(next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (user.userInfo.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        // hash the password along with our new salt
        bcrypt.hash(user.userInfo.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.userInfo.password = hash;

            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.userInfo.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User',userSchema);