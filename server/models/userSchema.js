// // import mongoose from "mongoose";

// // const userSchema = mongoose.Schema({
// //     fname:{type:String,required:true},
// //     email:{type:String,required:true,unique:true},
// //     password:{type:String,required:true,minlength:6},

// // })

// // export default mongoose.model("User",userSchema)



// const mongoose = require('mongoose');

// const userSchema = mongoose.Schema({
//   fname: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true, minlength: 6 },
// });

// module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const SECRECT_KEY = "abcdefghijklmnop"
const validator = require("validator")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not Valid Email")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
  });


  userSchema.methods.generateAuthtoken = async function(){
    try {
        let newtoken = jwt.sign({_id:this._id},SECRECT_KEY,{
            expiresIn:"1d"
        });
        console.log(tokens);
        this.tokens = this.tokens.concat({token:newtoken});
        await this.save();
        console.log(newtoken);
        return newtoken;
    } catch (error) {
        res.status(400).json(error)
    }
}

  const User = mongoose.model('User', userSchema);
  module.exports = User;
  