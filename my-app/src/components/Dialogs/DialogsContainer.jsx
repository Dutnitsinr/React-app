// import s from './Dialogs.module.css'
// import {NavLink} from 'react-router-dom'
// import DialogItem from './DialogItems/DialogItems'
// import Message from './Message/Message'
import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import { WithAuthRedirect } from '../hoc/WithAuthRedirect'
import { compose } from 'redux'



let mapStateToProps = ( state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


export default compose(
    connect(mapStateToProps, {
        updateNewMessageBody: updateNewMessageBodyCreator,
        sendMessage: sendMessageCreator
    }),
    WithAuthRedirect
    
    )(Dialogs)