import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";





let store = {
      _state: {
        profilePage: {
          posts: [
              {id: 1,message:"hello, how are you?", likeCount: 20, age:20},
              {id: 2,message:"hello, im ok", likeCount: 15, age:15},
              {id: 3,message:"blalblak", likeCount: 15, age:15},
              {id: 4,message:"hello, im bad", likeCount: 15, age:15},
            
            ],
            newPostText: "it-kamasutra.com"
          
        },
        dialogsPage: {
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
            ]
        },
        sidebar: {
            users: [
                {name: 'dima', img: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-60.jpg"},
                {name: 'lera', img: "https://www.beautifulimages.net/wp-content/uploads/2018/07/Monday-Images-for-Facebook-Whatsapp-Pictures-77.jpg"},
                {name: 'eva', img: "https://i09.fotocdn.net/s126/3fdd2c9873557493/public_pin_l/2868278484.jpg"},


            ]
        },
        newMessagesBody:{
          
        }
      
        },
      _callSubscriber() {
        console.log('state changed');
        },
      addPost() {

        let newPost = {
          id: 5, 
          message: this._state.profilePage.newPostText,
          likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        store._callSubscriber(this._state)
      },
      getState() {
        return this._state
      },
      updateNewPostText  (newText)  {
        this._state.profilePage.newPostText = newText
        store._callSubscriber(this._state)
      },
      subscribe  (observer)  {
        store._callSubscriber = observer
      },
      dispatch(action){
        

         this._state.profilePage = profileReducer(this._state.profilePage, action)
         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
         this._state.sidebar = sidebarReducer(this._state.sidebar, action)

         
          this._callSubscriber(this._state)
        
      }
}





export default store
window.store = store