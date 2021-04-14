import { profileAPI, usersAPI } from "../api/api"

let initialState = {
  posts: [
    {id: 1,message:"hello, how are you?", likeCount: 20, age:20},
    {id: 2,message:"hello, im ok", likeCount: 15, age:15},
    {id: 3,message:"blalblak", likeCount: 15, age:15},
    {id: 4,message:"hello, im bad", likeCount: 15, age:15},
  
  ],
  newPostText: "it-kamasutra.com",
  profile: null,
  status: null
}


const profileReducer = (state=initialState, action) => {

    
    switch(action.type){
        case 'ADD-POST':
          let newPost = {
          id: 5, 
          message: action.body,
          likeCount: 0
        }

          
          return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
            
          }
     case 'UPDATE-NEW-POST-TEXT':
        
       return {
         ...state,
         newPostText: action.newText
       }
    case 'SET_USER_PROFILE' : 
       return {
         ...state,
         profile: action.profile
       }
    case 'SET_USER_STATUS' :
      return {
        ...state,
        status: action.status
      }
      default: return state
      }
     
    
}

export const  addPostActionCreator = (body) => {
    return {
      type: 'ADD-POST', 
      body
    }
  }
export const  updateNewPostTextActionCreator = (text) => {
  return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}

export const setUserProfile = (profile) => {
  return {type: 'SET_USER_PROFILE', profile}
}

export const setUserStatus = (status) => {
  return {type: 'SET_USER_STATUS', status}
}

export const getUser = (userId) => (dispatch) => {
  usersAPI.getUser(userId)
  .then(res => {
      dispatch(setUserProfile(res.data))
      
  })
}

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
  .then(res => {
      dispatch(setUserStatus(res.data))
      
  })
}
  
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
  .then(res => {
    if(res.data.resultCode === 0) {
      dispatch(setUserStatus(status))
      console.log(res);
    }
       
      
  })
}

export default profileReducer