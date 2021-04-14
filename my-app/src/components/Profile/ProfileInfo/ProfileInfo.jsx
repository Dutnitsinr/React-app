import { Redirect } from 'react-router'
import Loader from '../../Loader/Loader'
import s  from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatusWithHook'

const ProfileInfo =  (props) => {
   
  if(!props.profile) {
    return <Loader/>
  }
  
    return (
    <div >
       
      <div>
        <img src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469639_vodnaya_dlad.jpg" className={s.mainImage}/>
      </div>
      
      <div className={s.content}>
        <div>
          <img src={props.profile.photos.large ? props.profile.photos.large  : 'https://agplenka.ru/wp-content/uploads/2020/05/ava02.jpg'} className={s.profileImage}/>

        </div>
        <ProfileStatus {...props}  status={props.status} updateStatus={props.updateStatus}/>
         
        <div>
          <h1>{props.profile.fullName}</h1>
          <h2>{props.profile.aboutMe ? props.profile.aboutMe : 'aboutMe is undefined'}</h2>
        </div>
        <div>
          
          <a href={props.profile.contacts.twitter}>My TWITTER</a>
        </div>
        <div>
          <h2>{`Ищу работу: ${props.profile.lookingForAJob ? 'да' : 'нет'}`}</h2>
        </div>
      </div>
       
    </div>
    )
    }

export default ProfileInfo