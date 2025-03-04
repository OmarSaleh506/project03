const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username : {
        type : String,
        unique : true,
        required : true
    },
    secret_key : String,
    password : {
        type : String,
        required : true
    }
});
module.exports = mongoose.model('user',userSchema)