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

    
    if(action.type === 'ADD-POST'){
        let newPost = {
          id: 5, 
          message: state.newPostText,
          likeCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = ""
        
      }else if(action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText
       
      }
    


    return state
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