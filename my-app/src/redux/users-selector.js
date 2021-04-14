import {createSelector} from 'reselect'

export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
}


export const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSuper = createSelector(getUsers, (users) => {
    
    return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUserCount
}

export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingProcess = (state) => {
    return state.usersPage.followingInProcess
}

 