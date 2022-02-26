const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    roles : {
        type : Number,
        default : 2001
    },
    password : {
        type : String,
        required : true,
    },
    refreshToken : String
})

module.exports = mongoose.model('User', userSchema);