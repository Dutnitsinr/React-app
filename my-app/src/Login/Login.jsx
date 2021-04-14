import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../redux/auth-reducer';
import LoginFormm from './LoginForm'


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginFormm onSubmit={onSubmit}/>
       </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)