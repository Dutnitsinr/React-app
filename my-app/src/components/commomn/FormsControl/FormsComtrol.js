import React from 'react'
import './FormsControl.css'

const FormControl = ({ meta, children}) => {
    const hasError = meta.touched && meta.error && <span className={'error'}>{meta.error}</span>
    const hasErrorForStyles = meta.touched && meta.error && 'error'
return (
    <div className={`${hasErrorForStyles}`}>
        {children}
        {hasError}
    </div>
)
}

export const Textarea = (props) => {
    
   return <FormControl {...props}><textarea {...props.input} {...props}/></FormControl>
}


export const Input = (props) => {
    return <FormControl {...props}><input {...props.input} {...props}/></FormControl>
}