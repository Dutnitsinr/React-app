import { NavLink } from 'react-router-dom'
import s from './Header.module.css'


const Header = ({id, login, email, isAuth, src, logout}) => {

    return (
        <header className={s.header}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/1024px-Rockstar_Games_Logo.svg.png" />
          <div className={s.loginBlock}>
            {isAuth ? <div>{`${login}`} <button onClick={logout}>logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}
          </div>
        </header>
    )
}

export default Header