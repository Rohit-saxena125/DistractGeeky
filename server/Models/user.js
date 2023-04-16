const mongoose = require('mongoose');
const validator = require('validator');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
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
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);
module.exports = User;