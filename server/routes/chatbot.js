const express= require("express")
const {Chatbot}=require('../controllers/chatbotControllers')

const router=express.Router();

router.post('/',Chatbot)
module.exports=router