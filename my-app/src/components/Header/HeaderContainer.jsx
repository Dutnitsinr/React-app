
import React from 'react'
import Header from './Header'

import { connect } from 'react-redux'
import {setAuthUserData,  setProfilePhoto, authMeThunk, logout} from '../../redux/auth-reducer'


class HeaderContainer extends React.Component{
     
    render (){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.userId,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, { logout})(HeaderContainer)