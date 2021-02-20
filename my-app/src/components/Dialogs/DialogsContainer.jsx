// import s from './Dialogs.module.css'
// import {NavLink} from 'react-router-dom'
// import DialogItem from './DialogItems/DialogItems'
// import Message from './Message/Message'
import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'


 

const DialogsContainer = () => {
     
    return (
        <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
               return <Dialogs 
                updateNewMessageBody={onNewMessageChange} 
                sendMessage={onSendMessageClick}
                dialogsPage={state}/>}
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer