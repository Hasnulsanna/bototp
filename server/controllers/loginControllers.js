const users = require("../models/userSchema");
const userotp=require('../models/userOtp')
const jwt = require("jsonwebtoken");
const SECRECT_KEY = "abcdefghijklmnop"


exports.Login = async(req,res)=>{
    const{email,otp}=req.body
    
    if(!otp || !email){
        return res.status(400).json({error:"Please enter your otp and email"})
    }
    try {
        const otpverification = await userotp.findOne({email:email})
        if(otpverification.otp === otp){
            const preuser = await users.findOne({email:email})
            // const token = await preuser.generateAuthtoken();
            const token = jwt.sign({ userid: preuser._id }, SECRECT_KEY, { expiresIn: '1h' });

            return res.status(200).json({message:"User Login Successfully",userToken:token})

        }
        else{
            return res.status(400).json({error:"Invalid Otp"})
        }
    } catch (error) {
        return res.status(400).json({ error: "Invalid Details", errorMessage: error.message });
    }
}
