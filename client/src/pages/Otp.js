import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'

import {sendOtp} from '../actions/otp'




const Otp = () => {

  const [otp,sentOtp]=useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const OtpUser = async (e) =>{
    e.preventDefault();

      if(otp === ""){
        toast.error("Enter your otp")
      }
      else if(!/[^a-zA-Z]/.test(otp)){
        toast.error("Enter Valid Otp")
      }
      else{
        try{
          const data = {
            otp, email: location.state
          }
          console.log(data);
            const response = await axios.post('http://localhost:5000/login', {otp, email: location.state});
            dispatch(sendOtp({email:location.state,token:response.data.userToken}))
            toast.success("user logined successfully")
            navigate("/chatbot")
            // navigate('/')
            // toast.success("user registered successfully")
            // setMessage(response.data.message);
        //     if (response) {
        //       navigate("/chatbot")
        //       setTimeout(() => {
        //       navigate("/chatbot")
        //       }, 5000)
        //     }
        //     else{
        //       toast.error(response.response.data.error);
        //     }
        // }
        }
        catch(error){
          console.log(error.message);
        }
      }
      

  }

  return (
    <>
    <section>
    <div className="form_data">
          <div className="form_heading">
            <h1>Please Enter Your OTP Here</h1>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="otp">OTP</label>
              <input type="text" name="otp" id="" onChange={(e) => sentOtp(e.target.value)} placeholder='Enter Your OTP' />
            </div>
            <button className='btn' onClick={OtpUser}>Submit</button>
          </form>
        </div>
        <ToastContainer />
    </section>
    </>
  )
}

export default Otp