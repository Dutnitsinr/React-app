import React, { useState } from 'react'
import Loader from '../../Loader/Loader'

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
      setEditMode(false)
      props.updateStatus(status)

  }
  console.log(props.status);
  return (
          <div>
            <div>
                {editMode ? 
                <input autoFocus value={status} onBlur={deactivateMode} onChange={e => setStatus(e.target.value)}></input> :
                <span onDoubleClick={activateMode}>{props.status ? props.status : 'this user has no status'}</span>}
            </div>
            
          </div>
    )
    
        
}

export default ProfileStatusWithHooks