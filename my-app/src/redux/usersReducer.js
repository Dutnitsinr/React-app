import { usersAPI } from "../api/api";

const initialState = {
             users: [],
             pageSize: 10,
             totalUserCount: 100,
             currentPage: 1,
             isFetching: false,
             followingInProcess: []
        }

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(item => {
                    if(item.id === action.id){
                        console.log('follow');
                        return {...item, follow: true}
                    }
                    return item
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(item => {
                    if(item.id === action.id){
                        console.log('unfollow');

                        return {...item, follow: false}
                    }
                    return item
                })
            }
        case 'SET_STATE': 
            return {
                ...state,
                users: action.users
            }
        case 'CHANGE_CURRENT' :
            return {
                ...state,
                currentPage: action.current
            }
        case 'SET_TOTAL_USERS' :
            return {
                ...state,
                totalUserCount: action.totalNum
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS' :
            return {
                ...state,
                followingInProcess: action.isFetching ?  [...state.followingInProcess, action.userId] : state.followingInProcess.filter(id => id != action.userId)
            }
    default: return state

    }

}


export const follow = (id) => {
    return {type: 'FOLLOW', id}
}

export const unfollow = (id) => {
    return {type: 'UNFOLLOW', id}
}

export const setState = (users) => {
    return {type: 'SET_STATE', users}
}

export const changeCurrent = (current) => {
    return {type: 'CHANGE_CURRENT', current}
}

export const setTotalUsers = (totalNum) => {
    return {type: 'SET_TOTAL_USERS', totalNum}
}

export const toggleIsFetching = (isFetching) => {
    return {type: 'TOGGLE_IS_FETCHING', isFetching}
}

export const toggleIsFollowingProgress = (isFetching ,userId) => {
    return {type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId}
}

export const getUsers = (currentPage, pageSize) => (dispatch) => {
   dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
    .then(res => {
        dispatch(toggleIsFetching(false))
        dispatch(setState(res.items))
       dispatch(setTotalUsers(res.totalCount))

    })
}

export const unfollowThunk = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    
    usersAPI.unfollow(userId)
    .then(res => {
        if(res.data.resultCode === 0){
            dispatch(unfollow(userId))
            dispatch(toggleIsFollowingProgress(false, userId))
        }
    })
}

export const followThunk = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    
    usersAPI.follow(userId)
    .then(res => {
        if(res.data.resultCode === 0){
            dispatch(follow(userId))
            dispatch(toggleIsFollowingProgress(false, userId))
        }
    })
}

 

export default usersReducer