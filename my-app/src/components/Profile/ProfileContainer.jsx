import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {setUserProfile, getUser, getUserStatus, updateStatus} from '../../redux/profileReducer'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { usersAPI } from '../../api/api'
import { WithAuthRedirect } from '../hoc/WithAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount () {
    let userId= this.props.match.params.userId
    if(!userId)  {
        userId = this.props.authorizeUserId 
    } else {
        this.props.history.push('/login')
    }   
        this.props.getUser(userId)
        this.props.getUserStatus(userId)
        
    }

    render () {
        
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }

}

 

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizeUserId: state.auth.userId,
        isAuth: state.auth.isAuth 
    }
}

 
export default compose(
    withRouter,
    connect(mapStateToProps, {
        setUserProfile,
        getUser,
        getUserStatus, 
        updateStatus
    })

)(ProfileContainer)
