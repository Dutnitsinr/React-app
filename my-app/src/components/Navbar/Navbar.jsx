import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
            
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.active}>profile</NavLink>
                
            </div>
            <div className={s.item}>
                {/* <NavLink to="/dialogs" activeClassName={s.active} >messages</NavLink> */}
            </div >
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active} >users</NavLink>
            </div >
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>news</NavLink>
            </div>
           
            
             
      </nav>
    )
    }

export default Navbar