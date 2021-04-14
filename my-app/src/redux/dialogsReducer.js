const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  messages: [
    {id:1, message: "Hi"}, 
    {id:2, message:"how are you"},
    {id:3, message:"yo"},
    {id:4, message:"yp"},
    {id:5, message:"yo"},
    {id:6, message:"yo"},
  ],
  dialogs: [
    {id:1,name: "Dimych", img:"https://trikky.ru/wp-content/blogs.dir/1/files/2018/04/Kotik11.jpg"}, 
    {id:2, name:"Andrey", img: "https://pbs.twimg.com/media/ELQHs3RWsAEuQ2E.jpg:large"},
    {id:3, name:"Sveta", img: "https://arbooz.org/wp-content/uploads/sites/32/2015/09/Kotyata-6.jpg"},
    {id:4, name:"Sasha", img: "https://avatars.mds.yandex.net/get-zen_doc/3397137/pub_5ec7619f0676e475b220a4d0_5ec76ac0f4a1862d8f90aa78/scale_1200"},
    {id:5, name:"Viktor", img: "https://mnogo-krolikov.ru/wp-content/uploads/2019/03/https-alev-biz-wp-content-uploads-2017-01-cute-l.jpeg"},
    {id:6, name:"Valera", img: "https://mtdata.ru/u13/photo5B1C/20744637514-0/original.jpg"},
  ],
  newMessagesBody:''
}

export const dialogsReducer = (state=initialState, action ) => {
  // let stateCopy = {...sta}
      switch(action.type){
       case  UPDATE_NEW_MESSAGE_BODY:
         
       return {
         ...state,
         newMessagesBody: action.body
       }
      case SEND_MESSAGE:
        let body = action.body 
        
        return {
          ...state,
          messages: [...state.messages, {id:6, message: body}],
          newMessagesBody: ''
        }
      default: 
      return state
      
      }
    }

export const  sendMessageCreator = (body) => {
    return {
      type: SEND_MESSAGE,
      body
    }
  }
  export const  updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
  }

export default dialogsReducer
