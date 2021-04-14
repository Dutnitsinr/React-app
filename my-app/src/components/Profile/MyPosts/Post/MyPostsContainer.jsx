// import s  from './MyPosts.module.css'
// import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';

// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from '../MyPosts'
import {connect} from 'react-redux'


 

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  updateNewPostText: (text) => {
    dispatch(updateNewPostTextActionCreator(text))
  },
  addPost:() => {
    dispatch( addPostActionCreator())
  }
}
  
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default ProfileContainer

