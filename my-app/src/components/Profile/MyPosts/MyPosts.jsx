import s  from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import { Field, Form, reduxForm } from 'redux-form'
import {maxLengthCreator, required } from '../../../utils/validators/validate'
import { Textarea } from '../../commomn/FormsControl/FormsComtrol'

 
const maxLenghtConstans = maxLengthCreator(10)

const MyPosts = (props) => {
   
  let postElement = props.posts.map(el => {
    return  <Post message={el.message} likeCount={el.likeCount} id={el.id} deletePost={props.deletePost}/>
  })
  const onSubmit = (body) => {
    props.addPost(body.postText)
  }

    return (
      <div className={s.postEdit}>
     <h3>My posts</h3>  
      <div>
         <ReduxPostsForm onSubmit={onSubmit}/>
        
      </div>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>
    )
    }

const PostForm = (props) => {
   
  return (
    <form onSubmit={props.handleSubmit}>
      <Field  name={'postText'} placeholder={'new post text'} component={Textarea} validate={[required, maxLenghtConstans]}/>
      <button >Add Post</button>
    </form>
     
   
  )
}

const ReduxPostsForm = reduxForm({
  form: 'posts'
})(PostForm)

export default MyPosts

