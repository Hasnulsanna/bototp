// // const users = require("../models/userSchema");
// const userotp=require('../models/userOtp')
// const nodemailer=require("nodemailer")



// const transporter = nodemailer.createTransport({
//     service:"gmail",
//     auth:{
//         user:process.env.Email,
//         pass:process.env.PASSWORD
//     }
// })

// exports.Otp = async(req,res)=>{
//     const{email}=req.body;
//     if(!email){
//         res.status(400).json({error:"Please Enter your email"})
//     }

//     try{
//         const preuser = await this.userOtpSend.findOne({email:email})
//         if(preuser){
//             const OTP = Math.floor(100000 + Math.random()*900000);

//             const existEmail = await userotp.findOne({email:email})


//             if(existEmail){
//                 const updatedData = await userotp.findByIdAndUpdate({_id:existEmail._id},{
//                     otp:OTP
//                 },{new:true}
//                 ); 
            
//             await updatedData.save();


//             const mailOptions = {
//                 from : process.env.EMAIL,
//                 to:email,
//                 subject : "Email for Otp Verification",
//                 text:`OTP:-${OTP}`
//             }

//             transporter.sendEmail(mailOptions,(error,info) =>{
//                 if(error){
//                     console.log("error",error)
//                     res.status(400).json({ error: "email not send" })
//                 }
//                 else{
//                     console.log("Email sent",info.response);
//                     res.status(200).json({message:"Email sent successfully"})
//                 }
//             })



//         }
//         else{
//             const saveOtpData = new userotp({
//                 email,otp:OTP
//             });
//             await saveOtpData.save();
//             const mailOptions = {
//                 from : process.env.EMAIL,
//                 to:email,
//                 subject : "Email for Otp Verification",
//                 text:`OTP:-${OTP}`
//             }
//             transporter.sendEmail(mailOptions,(error,info) =>{
//                 if(error){
//                     console.log("error",error)
//                     res.status(400).json({ error: "email not send" })
//                 }
//                 else{
//                     console.log("Email sent",info.response);
//                     res.status(200).json({message:"Email sent successfully"})
//                 }
//             })
//         }
//     }
//     else{
//         res.status(400).json({error:"This User Not Exist in our Db"})
//     }
// }
// catch(error){
//     res.status(400).json({ error: "Invalid Details", error })
// }
// }


// const userotp = require('../models/userOtp');
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });

// exports.Otp = async (req, res) => {
//   const { email } = req.body;
//   if (!email) {
//     res.status(400).json({ error: "Please enter your email" });
//     return;
//   }

//   try {
//     const preuser = await userotp.findOne({ email: email });
//     if (preuser) {
//       const OTP = Math.floor(100000 + Math.random() * 900000);
//       const existEmail = await userotp.findOneAndUpdate({ email: email }, { otp: OTP }, { new: true });

//       const mailOptions = {
//         from: process.env.EMAIL,
//         to: email,
//         subject: "Email for OTP Verification",
//         text: `OTP: ${OTP}`
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error("Email not sent:", error);
//           res.status(400).json({ error: "Email not sent" });
//         } else {
//           console.log("Email sent:", info.response);
//           res.status(200).json({ message: "Email sent successfully" });
//         }
//       });
//     } else {
//       const OTP = Math.floor(100000 + Math.random() * 900000);
//       const saveOtpData = new userotp({ email, otp: OTP });
//       await saveOtpData.save();

//       const mailOptions = {
//         from: process.env.EMAIL,
//         to: email,
//         subject: "Email for OTP Verification",
//         text: `OTP: ${OTP}`
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error("Email not sent:", error);
//           res.status(400).json({ error: "Email not sent" });
//         } else {
//           console.log("Email sent:", info.response);
//           res.status(200).json({ message: "Email sent successfully" });
//         }
//       });
//     }
//   } catch (error) {
//     console.error("Invalid Details:", error);
//     res.status(400).json({ error: "Invalid Details" });
//   }
// };



const userotp=require('../models/userOtp')
const nodemailer=require("nodemailer")


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});


exports.Otp = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ error: "Please enter your email" });
    return;
  }

  try {
    const preuser = await userotp.findOne({ email: email });
    if (preuser) {
      const OTP = Math.floor(100000 + Math.random() * 900000);
      const existEmail = await userotp.findOneAndUpdate({ email: email }, { otp: OTP }, { new: true });

      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Email for OTP Verification",
        text: `OTP: ${OTP}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Email not sent:", error);
          res.status(400).json({ error: "Email not sent" });
        } else {
          console.log("Email sent:", info.response);
          res.status(200).json({ message: "Email sent successfully" });
        }
      });
    } else {
      const OTP = Math.floor(100000 + Math.random() * 900000);
      const saveOtpData = new userotp({ email, otp: OTP });
      await saveOtpData.save();

      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Email for OTP Verification",
        text: `OTP: ${OTP}`
      };
      console.log(mailOptions);
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Email not sent:", error);
          res.status(400).json({ error: "Email not sent" });
        } else {
          console.log("Email sent:", info.response);
          res.status(200).json({ message: "Email sent successfully" });
        }
      });
    }
  } catch (error) {
    console.error("Invalid Details:", error);
    res.status(400).json({ error: "Invalid Details" });
  }
};
