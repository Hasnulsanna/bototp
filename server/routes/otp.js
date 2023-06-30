const express=require("express")
const {Otp}=require('../controllers/otpControllers.js')





const router = express.Router();
router.post('/',Otp)
module.exports=router
