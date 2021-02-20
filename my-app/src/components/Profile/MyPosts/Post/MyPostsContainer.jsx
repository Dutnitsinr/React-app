// import s  from './MyPosts.module.css'
// import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from '../MyPosts'


 

const MyPostsContainer = (props) => {
   
  let state = props.store.getState()

  

  let addPost = () => {
    // props.addPost()
    props.store.dispatch(addPostActionCreator())
    
  }

  let onPostChange = (text) => {
    
   
    // props.updateNewPostText(text)

    props.store.dispatch( updateNewPostTextActionCreator(text))
  }

    return (<MyPosts 
              updateNewPostText={onPostChange} 
              addPost={addPost} 
              posts={state.profilePage.posts}
              newPostText={state.profilePage.newPostText}/>)}

export default MyPostsContainer

