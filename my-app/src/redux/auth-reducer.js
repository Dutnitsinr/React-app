import { stopSubmit } from "redux-form"
import { authAPI, usersAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const CHANGE_AUTH_STATUS = 'CHANGE_AUTH_STATUS'
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO'
const SET_USER_ID = 'SET_USER_ID'

const initialState = {
    userId:null,
    login:null,
    email:null,
    isAuth: false,
    profilePhoto: null
}

const authReducer = (state = initialState, action) => {
switch (action.type) {
case SET_USER_DATA:
   return {
       ...state,
        ...action.data
   }
case CHANGE_AUTH_STATUS: 
   return {
       ...state, 
       isAuth: action.isAuth
   }

   


default: return state

}

}


export const setAuthUserData = (userId, login, email, isAuth) => {
   
return {type: SET_USER_DATA, data: {userId, login, email, isAuth}}
}

export const setProfilePhoto = (profilePhoto) => {
    return {type: SET_PROFILE_PHOTO, profilePhoto}
    }

export const authMeThunk = () => (dispatch) => {
   return usersAPI.authMe()
    .then(res => {
        if(res.data.resultCode === 0){
            dispatch(setAuthUserData(res.data.data.id, res.data.data.login,  res.data.data.email, true))
            
        }
    })
    
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
    .then(res => {
        
        if(res.data.resultCode === 0){
            dispatch(authMeThunk())
            
        }else {
            if(res.data.messages.length > 0) {
            dispatch(stopSubmit('login', {_error: res.data.messages}))
            }
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
    .then(res => {
        
        if(res.data.resultCode === 0){
            dispatch(setAuthUserData(null,null,null, false))

            dispatch(authMeThunk())
            
        }
    })
}

export default authReducer