// import s  from './MyPosts.module.css'
// import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import StoreContext from '../../../../StoreContext';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from '../MyPosts'


 

const MyPostsContainer = () => {
   
  // let state = props.store.getState()

    return (
      <StoreContext.Consumer>{
        (store) => {
          let addPost = () => {
            store.dispatch(addPostActionCreator())
          }
          let onPostChange = (text) => {
            store.dispatch( updateNewPostTextActionCreator(text))
          }
          let state = store.getState()
       return <MyPosts 
              updateNewPostText={onPostChange} 
              addPost={addPost} 
              posts={state.profilePage.posts}
              newPostText={state.profilePage.newPostText}/>
            }
      }
      </StoreContext.Consumer>
    )}

export default MyPostsContainer

