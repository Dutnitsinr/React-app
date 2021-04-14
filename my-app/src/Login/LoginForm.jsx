import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../components/commomn/FormsControl/FormsComtrol';
import { maxLengthCreator, required } from '../utils/validators/validate';


const maxLenghtConstans = maxLengthCreator(50)


const LoginForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={Input} validate={[required, maxLenghtConstans]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={Input} validate={[required, maxLenghtConstans]} type={'password'}/>
                </div>
                <div>
                    <Field component={Input} name={'rememberme'} type="checkbox"/>
                    <span>remember me</span>
                </div>
                <div className="alert alert-danger" role="alert">
                    {/* <h1>You have wrote the uncorrent password or login</h1> */}
                    {props.error}
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
  })(LoginForm)

export default ReduxLoginForm