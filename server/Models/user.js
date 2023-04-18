const mongoose = require('mongoose');
const validator = require('validator');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, 'Username already exists'],
        minlength: [3, 'Username must be atleast 3 characters long'],
        maxlength: [20, 'Username must be atmost 20 characters long']
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be atleast 8 characters long'],
        maxlength: [20, 'Password must be atmost 20 characters long']
    },
    email:{
        type: String,
        required: true,
        unique: [true, 'Email already exists'],
       validate(value){
              if(!validator.isEmail(value)){
                    throw new Error('Invalid Email')
                }
            }
    }
    // role : {
    //     type : String,
    //     enum : ['Admin', 'user']
    // }
});
// userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);
module.exports = User;