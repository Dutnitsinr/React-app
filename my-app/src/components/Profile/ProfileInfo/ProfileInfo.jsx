import { Redirect } from 'react-router'
import Loader from '../../Loader/Loader'
import './ProfileInfo.css'
import ProfileStatus from './ProfileStatusWithHook'

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Loader />
  }

  return (
    <div className={'content'}>
      <div>
        <img src={props.profile.photos.large ? props.profile.photos.large : 'https://agplenka.ru/wp-content/uploads/2020/05/ava02.jpg'} className={'profileImage'} />

      </div>
      <div className={'info'}>
        <h1>{props.profile.fullName}</h1>
        <h3 className={'status'}>status: <ProfileStatus {...props} status={props.status} updateStatus={props.updateStatus} /></h3> 

        <h4>{props.profile.aboutMe ? props.profile.aboutMe : 'Пользователь не установил информацию о себе'}</h4>

        <h4>{`В поиске работе: ${props.profile.lookingForAJob ? 'да' : 'нет'}`}</h4>

      </div>

    </div>
  )
}

export default ProfileInfo