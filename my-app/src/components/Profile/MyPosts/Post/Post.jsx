import s  from './Post.module.css'

const Post = (props) => {
    return (
      
     
        <div className={s.item}>
        <img src="https://wallpaperaccess.com/full/1906981.jpg" alt=""/>

          {props.message}
          
          <div> 
            <span>like: {props.likeCount}</span>
          </div>
          <input value="5"/>
          <input value="6"/>

        </div>
      
    
    )
    }

export default Post