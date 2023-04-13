const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
    username:String,
    email:{
        type: String,
        required: true,
        unique: [true, 'Email already exists'],
       validate(value){
              if(!validator.isEmail(value)){
                    throw new Error('Invalid Email')
                }
            }
    },
    password:String,
    role : {
        type : String,
        enum : ['Admin', 'user']
    }
});
const User = mongoose.model('User', userSchema);
module.exports = User;