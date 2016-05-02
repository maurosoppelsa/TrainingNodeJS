/**
 * Created by mauro on 01/05/16.
 */
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: String,
    badge: Number,
    dob: { type: Date, default: Date.now },
    isloved: Boolean
});
mongoose.model('User', userSchema);