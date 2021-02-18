import s from './Dialogs.module.css'
// import {NavLink} from 'react-router-dom'
import DialogItem from './DialogItems/DialogItems'
import Message from './Message/Message'
import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'


 

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage

    let dialogElements = state.dialogs.map(el => {
        return <DialogItem name={el.name} id={el.id} img={el.img}/>
    })
    
    let messageElement = state.messages.map(el => {
        return <Message message={el.message}/>
    })

    let newMessageBody = state.newMessagesBody


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
       
    }

    let onNewMessageChange = (e) => {
       let body =  e.target.value
       props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
     <div>
        <div className={s.dialogs}>
           <div className={s.dialogItems}>
               
                
                {dialogElements}

           
                
           </div>
         <div className={s.messages}>
               
                {messageElement}
            
         </div>
        </div>
        <div className={s.text}>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}    
                          placeholder="enter your message"
                          ></textarea>
                <button onClick={onSendMessageClick}>add message</button>
            </div>
            
     </div>
    )
}

export default Dialogs