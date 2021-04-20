import  './Post.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = (props) => {
  return (
    <div className={'post'}>
      <h1 className={'postText'}>{props.message}</h1> 
      <button onClick={() => props.deletePost(props.id)} className={'btn btn-primary'}> Удалить пост</button>

    </div>
  )
}

export default Post