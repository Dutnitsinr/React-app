import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'
import './Users.css'

const Users = (props) => {
    const {users, follow, unfollow, pageSize, totalUserCount, currentPage} = props
    
        let pagesCount = Math.ceil(totalUserCount / pageSize)
        let pages = []
        for(let i =1; i <= pagesCount; i++){
            if(i <= 10) {
                pages.push(i)

            }
            
        }
    return (
        <div>
           
            {pages.map(item => {
                return <span className={currentPage === item ? 'selectedPage pageSel' : 'pageSel'} onClick={() => props.onPageChanged(item)}>{item}</span>
            })}
        
            {users.map((item) => {
            
            return(
            <div className='item' key={item.id}>
                <NavLink to={'/profile/' + item.id}> 
                     <img src={item.photos.small ? item.photos.small : 'https://cureintrip.com/img/profilepicture.png'} alt={item.name} className='image'/>
                </NavLink>
                    <h1>{item.name}</h1>
                    <p>{item.status}</p>
                    
                {item.follow ? 
                    <button disabled={props.followingInProcess.some(id => id === item.id)} onClick={() => props.unfollowThunk(item.id)}>unfollow</button> :
                    <button disabled={props.followingInProcess.some(id => id === item.id)}  onClick={() => props.followThunk(item.id)}>follow</button>   

                }
                </div>
            )
            })}
        </div>
    )
}

export default Users