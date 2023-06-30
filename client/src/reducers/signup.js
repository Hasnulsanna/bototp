const signupReducers=(state={data:null},action) =>{
    switch (action.type) {
        case 'SIGNUP':
            localStorage.setItem('Profile',JSON.stringify({...action?.data}))
            return {...state,data:action?.data}
        case 'OTP':
            localStorage.setItem('Otp',JSON.stringify({...action?.data}))
            return {...state,data:action?.data}
        default:
            return state;
    }
}

export default signupReducers