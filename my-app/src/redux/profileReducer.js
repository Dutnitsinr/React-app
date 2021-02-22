let initialState = {
  posts: [
    {id: 1,message:"hello, how are you?", likeCount: 20, age:20},
    {id: 2,message:"hello, im ok", likeCount: 15, age:15},
    {id: 3,message:"blalblak", likeCount: 15, age:15},
    {id: 4,message:"hello, im bad", likeCount: 15, age:15},
  
  ],
  newPostText: "it-kamasutra.com"
}


const profileReducer = (state=initialState, action) => {
  let stateCopy = {...state}

    
    if(action.type === 'ADD-POST'){
        let newPost = {
          id: 5, 
          message: state.newPostText,
          likeCount: 0
        }
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(newPost)
        stateCopy.newPostText = ""
        

      }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
        stateCopy.newPostText = action.newText
       
      }
    


    return stateCopy
}

export const  addPostActionCreator = () => {
    return {
      type: 'ADD-POST',
  
    }
  }
  export const  updateNewPostTextActionCreator = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
  }
  

export default profileReducer