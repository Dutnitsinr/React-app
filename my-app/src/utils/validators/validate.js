export const required = (value) => {
    if(!value)  return 'Field is required'
    if(value) return undefined
}   


export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return 'error: too long post text'
    return undefined
}