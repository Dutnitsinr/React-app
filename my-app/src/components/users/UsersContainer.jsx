
import React from 'react'
import {changeCurrent, follow,  setState,  setTotalUsers,  unfollow, toggleIsFetching, toggleIsFollowingProgress, getUsers, unfollowThunk, followThunk} from '../../redux/usersReducer'
import {connect} from 'react-redux'
import Users from './Users';
import axios from 'axios'

import { usersAPI } from '../../api/api';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';
import Loader from '../Loader/Loader';
import { getCurrentPageSelector, getFollowingProcess, getIsFetching, getIsFetchingSelector, getPageSize, getTotalUsersCount, getUsersSelector, getUsersSuper } from '../../redux/users-selector';




class UsersContainer extends React.Component {
    

    componentDidMount () {
       this.props.getUsers(this.props.currentPage, this.props.pageSize)
       
    }
     
    onPageChanged = (current) =>{
        
        this.props.changeCurrent(current)
        this.props.getUsers(current, this.props.pageSize)
        
    }
    render() {
        const View = this.props.isFetching ? <Loader /> : <Users {...this.props} onPageChanged={this.onPageChanged}/>
        
        return View
    }   
}

// const mapStateToProps = (state) => {
//   return {
//       users: state.usersPage.users,
//       pageSize: state.usersPage.pageSize,
//       totalUserCount: state.usersPage.totalUserCount,
//       currentPage: state.usersPage.currentPage,
//       isFetching : state.usersPage.isFetching,
//       followingInProcess: state.usersPage.followingInProcess
//   }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUsersCount(state),
        currentPage: getCurrentPageSelector(state),
        isFetching : getIsFetchingSelector(state),
        followingInProcess: getFollowingProcess(state)
    }
  }
   


export default compose(
    connect(mapStateToProps,{
        follow,
        unfollow,
        changeCurrent,
        toggleIsFollowingProgress,
        getUsers,
        unfollowThunk,
        followThunk
    })
)(UsersContainer)


