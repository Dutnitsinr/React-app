import { stopSubmit } from "redux-form"
import { authAPI, usersAPI } from "../api/api"
import { authMeThunk } from "./auth-reducer"

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES'


const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
switch (action.type) {
case INITIALIZED_SUCCES:
   return {
       ...state,
        initialized: true
   }

   


default: return state

}

}

export const setInitializeSucces = () => {
   return {type: INITIALIZED_SUCCES }
}

export const initializeApp = () => (dispatch) => {
   
  let promise = dispatch(authMeThunk())
  promise.then(() => {
      dispatch(setInitializeSucces())

   }

  )
   

}



export default appReducer