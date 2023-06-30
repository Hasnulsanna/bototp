const express = require("express")
const {Login}=require("../controllers/loginControllers.js")

const router = express.Router();
router.post('/',Login)

module.exports=router