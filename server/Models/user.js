const mongoose = require('mongoose');


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
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);
module.exports = User;