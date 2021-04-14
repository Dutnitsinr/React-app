// import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/Post/MyPostsContainer'
// import s  from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'




const Profile = (props) => {
    return (
        <div >
          <ProfileInfo profile={props.profile} {...props}/>
         <MyPostsContainer 
                  
                  dispatch={props.dispatch}
                  
                  />
      </div>
    )
    }

export default Profile
