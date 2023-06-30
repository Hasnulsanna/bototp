// import users from '../models/userSchema'
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcryptjs'



// export const register = async (req,res)=>{
//     const {fname,email,password}=req.body
//     try{
//         const existinguser = await users.findOne({email});
//         if(existinguser){
//             alert("User Already Exist")
//         }
//         const hashedPassword = await bcrypt.hash(password,12)
//         const newUser = await users.create({fname,email,password:hashedPassword})
//         const token = jwt.sign({email:newUser.email,id:newUser._id},"otpchatbot",{expiresIn:'1h'})
//         res.status(200).json({result:newUser},token)
//     }
//     catch(error){
//         res.status(500).json({message:"something went wrong"})
//     }
// }



// To fix the error in the provided code snippet, you need to make a few changes to ensure compatibility with CommonJS syntax. Here's the rewritten code:

// javascript
// Copy code

// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// exports.register = async (req, res) => {
//   const { fname, email, password } = req.body;
//   try {
//     const existingUser = await users.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User Already Exists' });
//     }
//     const hashedPassword = await bcrypt.hash(password, 12);
//     const newUser = await users.create({ fname, email, password: hashedPassword });
//     const token = jwt.sign({ email: newUser.email, id: newUser._id }, 'otpchatbot', {
//       expiresIn: '1h',
//     });
//     res.status(200).json({ result: newUser, token });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };


// const bcrypt = require('bcrypt');

// import users from '../models/userSchema'

// exports.Signup = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if the user already exists
//     const existingUser = await User.find({ email: email });
//     if (existingUser.length > 0) {
//       return res.status(409).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({ email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// };



// import bcrypt from 'bcrypt';
// import User from '../models/User.js';

// export const Signup = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if the user already exists
//     const existingUser = await User.find({ email: email });
//     if (existingUser.length > 0) {
//       return res.status(409).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({ email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// };


const bcrypt = require('bcrypt');

const User = require('../models/userSchema');

exports.Signup = async (req, res) => {
  try {
    const { name,email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name,email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

