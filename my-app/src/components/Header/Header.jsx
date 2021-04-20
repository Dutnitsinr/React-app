import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = ({ id, login, email, isAuth, src, logout }) => {

  return (
    <header className={s.header}>
      <div className={s.headerImage}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/1024px-Rockstar_Games_Logo.svg.png" />
      </div>

      <div className={s.loginBlock}>
        {isAuth ? <div className={s.name}>{`${login}`} <button onClick={logout} className={'btn'}>logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header