import s  from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'


 

const MyPosts = (props) => {
   
  let postElement = props.postsData.map(el => {
    return  <Post message={el.message} likeCount={el.likeCount}/>
  })

  let newPostElement = React.createRef()

  let addPost = () => {
    
    props.dispatch(addPostActionCreator())
    
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch( updateNewPostTextActionCreator(text))
  }

    return (
      <div className={s.postEdit}>
     <h3>My posts</h3>  
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/>
        </div>
        <div> 
          <button onClick={addPost}>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>
    )
    }

export default MyPosts

