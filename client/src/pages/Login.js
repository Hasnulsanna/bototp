import React, { useState } from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';


import "../styles/mix.css"

const Login = () => {

  const [email,setEmail] = useState("");
  const navigate = useNavigate();

  const sendOtp = async (e) => {
    e.preventDefault();

    if(email === ""){
      toast.error("Enter your email")
    }else if(!email.includes("@")){
      toast.error("Enter valid email")
    }
    else{
      try {
        const response = await axios.post('http://localhost:5000/otp',
          {email}
        );
        // console.log(response);
        toast.success("user logined successfully")
        console.log({state:email});
        navigate('/otp',{state:email})
        // toast.success("user registered successfully")
        // dispatch(signup({name,email,password}))
        // navigate('/')
        // setMessage(response.data.message);
      } catch (error) {
        // toast.error("User Already Registered")
        // setMessage('An error occurred');
        console.error(error);
      }

    }
  }


  return (
    <>
        <section>
            <div className="form_data">
                <div className="form_heading">
                    <h1>Welcome Back, Log In</h1>
                    <p>Hi, we are you glad you are back. Please login.</p>
                </div>
                <form>
                    <div className="form_input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
                    </div>
                    <button className='btn' onClick={sendOtp}>Login
                    </button>
                    <p>Don't have and account <NavLink to="/signup">Sign up</NavLink> </p>
                </form>
            </div>
            <ToastContainer />
        </section>
    </>
)
}

export default Login