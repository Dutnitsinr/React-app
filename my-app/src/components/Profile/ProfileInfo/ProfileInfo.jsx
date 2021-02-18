import s  from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
    <div >
      <div>
        <img src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469639_vodnaya_dlad.jpg" className={s.mainImage}/>
      </div>
      <div className={s.content}>
        {/* <img src="https://s1.1zoom.ru/big3/170/406013-svetik.jpg"/> */}
        ava + description
      </div>
    </div>
    )
    }

export default ProfileInfo