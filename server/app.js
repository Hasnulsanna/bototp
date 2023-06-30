
require("dotenv").config();

const Signup = require('./routes/signup')
const Otp=require('./routes/otp') 
const Login = require('./routes/login')
const Chatbot = require('./routes/chatbot')

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// Set up Express app
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb_id', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/',Signup)
app.use('/otp',Otp)
app.use('/login',Login)
app.use('/chatbot',Chatbot)


// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
