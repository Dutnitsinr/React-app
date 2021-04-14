let initialState = {
  users: []
  
}


const usersReducer = (state=initialState, action) => {
  
    switch(action.type) {
      case 'FOLLOW' :
        console.log('follow');
       return {
          
          ...state, 
          users: state.users.map(u => {
            if(u.id === action.userId){
              return {...u, followed: true}
            }
           return u
          })
        
        }

      case 'UNFOLLOW' :
        console.log('unfollow');

        return {
          
          ...state, 
          users: state.users.map(u => {
            if(u.id === action.userId){
              return {...u, followed: false}
            }
           return u
          })
        
        }
      case 'SET_USERS':
        return {
          ...state,
          users: [...action.users]
        }
        
      default:
        return{...state}

          
          
          
    }
    
}

export const  followAC = (userId) => {
    return {
      type: 'FOLLOW',
      userId
    }
  }
  export const  unfollowAC = (userId) => {
    return {type: 'UNFOLLOW', userId}
  }
  export const  setUsersAC= (users) => {
    return {type: 'SET_USERS', users}
  }
  

export default usersReducer