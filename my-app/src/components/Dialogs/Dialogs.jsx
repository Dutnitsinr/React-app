import s from './Dialogs.module.css'
// import {NavLink} from 'react-router-dom'
import DialogItem from './DialogItems/DialogItems'
import Message from './Message/Message'
import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../commomn/FormsControl/FormsComtrol'
import { required, maxLengthCreator } from '../../utils/validators/validate'

const maxLengthConstant = maxLengthCreator(10)
const onSubmit = (formData) => {
    console.log(formData);
}

const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogElements = state.dialogs.map(el => {
        return <DialogItem name={el.name} id={el.id} img={el.img}/>
    })
    let messageElement = state.messages.map(el => {
        return <Message message={el.message}/>
    })
    let newMessageBody = state.newMessagesBody
    // console.log(newMessageBody);
    let onSendMessageClick = () => {
        props.sendMessage()
       
    }
    let onNewMessageChange = (e) => {
       let body =  e.target.value
       props.updateNewMessageBody(body)
       
    }
    const addNewMessage = (body) => {
        props.sendMessage(body.newMessageBody);
    }

    if(props.isAuth === false) {
        return <Redirect to={'/login'}/>
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
            <ReduxDialogsForm onSubmit={addNewMessage}/>
     </div>
    )
}

const AddMessageForm = (props) => {
   return <form className={s.text} onSubmit={props.handleSubmit}>
       <Field component={Textarea} name={'newMessageBody'}  placeholder="enter your message" validate={[required, maxLengthConstant]}/>
  
    <button >add message</button>
</form>
}

const ReduxDialogsForm = reduxForm({
    form: 'dialogs'
  })(AddMessageForm)




export default Dialogs