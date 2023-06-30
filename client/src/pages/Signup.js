

import React, { useState } from 'react';
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify'
import {useDispatch} from 'react-redux'
import "../styles/mix.css"
import {signup} from '../actions/signup'
import { NavLink, useNavigate } from "react-router-dom"

const Signup = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();
    if(name === ""){
      toast.error("Enter Your Name")
    }else if(email === ""){
      toast.error("Enter Your Email")
    }else if(!email.includes("@")){
      toast.error("Enter Valid Email")
    }else if(password === ""){
      toast.error("Enter Your Password")
    }else if(password.length < 6){
      toast.error("password length minimum 6 character")
    }else{
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        email,
        password,
      });
      toast.success("user registered successfully")
      dispatch(signup({name,email,password}))
      navigate('/')
      setMessage(response.data.message);
    } catch (error) {
      toast.error("User Already Registered")
      setMessage('An error occurred');
      console.error(error);
    }
  }
  };
  return (
    <>
        <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{textAlign:"center"}}>We are glad that you will be using this ChatBot to manage
              your tasks! We hope that you will get to like it</p>
          </div>.
          <form>
            <div className="form_input">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className='two'>
              <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} id="password" placeholder='Enter Your password' />
              </div>
            </div>
            <button className='btn' onClick={handleSignup}>Sign Up</button>
            <p>Already have an account? <NavLink to="/">Login</NavLink> </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    
    </>
  );
};

export default Signup;


