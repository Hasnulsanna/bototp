import { setCurrentUser } from './currentUser'

export const sendOtp = (data,navigate) => async(dispatch)=>{
    try {
        // const {data}=await api.signUp(authData)
        dispatch({type:'OTP',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Otp'))))
        navigate('/')
    }
     catch (error) {
        console.log(error);

    }
}
