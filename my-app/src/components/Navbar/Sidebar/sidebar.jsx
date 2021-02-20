import StoreContext from '../../../StoreContext'
import s from './sidebar.module.css'

const Sidebar = (props) => {
    return (
        
                <div className={s.sidebar}>
                    <img src={props.img} alt="" className={s.image}/>
                    <h3>{props.name}</h3>
                </div>
            
             
        
    )
}

export default Sidebar