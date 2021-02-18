import s from './DialogItems.module.css'
import {NavLink} from 'react-router-dom'


const DialogItem = (props) => {
    return (
    <div className={s.dialog}>
        <img src={props.img} alt="" className={s.image}/>   
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink> 
     </div>
    )
}

 




export default DialogItem