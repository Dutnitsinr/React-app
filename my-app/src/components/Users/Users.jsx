import React from 'react'
import './Users.css'
import axios from 'axios'

const Users =   (props) => {
    
    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            console.log(res.data.items);
            props.setUsers(res.data.items)
        })
        
}
    return(
        <>
       {props.users.map(item => {
           const src = item.photos.small ? item.photos.small : 'https://miro.medium.com/max/2400/2*9yLm2yWUoMcZlywdOcfKAw.png'
           return (
            <>
               <div key={item.id}></div>
               <span>
                   <div>

                       <img src={src} alt={item.id} className='image'/>
                   </div>
                   <div>
                       {item.followed ? <button onClick={() => props.unfollow(item.id)}>Unfollow</button> 
                       : <button  onClick={() => props.follow(item.id)}>Follow</button>}
                       
                   </div>
               </span>
               <span>
                   <span>
                       <div>{item.name}</div>
                       <div>{item.status}</div>

                   </span>
                   <span>
                        <div>Moscow</div>
                        <div>Russia</div>
                   </span>

               </span>

            </>
           )
       })}
       </>
    )
}


export default Users