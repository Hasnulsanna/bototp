import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const signup = (data,navigate) => async(dispatch)=>{
    try {
        // const {data}=await api.signUp(authData)
        dispatch({type:'SIGNUP',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    }
     catch (error) {
        console.log(error);

    }
}


