const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'



export const dialogsReducer = (state, action ) => {
      if(action.type === UPDATE_NEW_MESSAGE_BODY){
        state.newMessagesBody = action.body
       
      }else if(action.type === SEND_MESSAGE){
        let body = state.newMessagesBody 
        state.newMessagesBody = ''
        state.messages.push({id:6, message: body})
      }
    

    return state
}

export const  sendMessageCreator = () => {
    return {
      type: SEND_MESSAGE,
  
    }
  }
  export const  updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
  }

export default dialogsReducer
