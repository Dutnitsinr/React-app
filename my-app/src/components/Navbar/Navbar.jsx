import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import Sidebar from './Sidebar/sidebar'

const Navbar = (props) => {
    let sidebarName = props.store.getState().sidebar.users.map((el) => {
        return <Sidebar name={el.name} img={el.img}/>
    })
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.active}>profile</NavLink>
                
            </div>
            <div className={s.item}>
                <NavLink to="dialogs" activeClassName={s.active} >messages</NavLink>
            </div >
            <div className={s.item}>
                <NavLink to="news" activeClassName={s.active}>news</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="music" activeClassName={s.active}>music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="settings" activeClassName={s.active}>settings</NavLink>
            </div>
        
            <div className={s.sidebar}>
                {sidebarName}
            </div>
             
      </nav>
    )
}

export default Navbar