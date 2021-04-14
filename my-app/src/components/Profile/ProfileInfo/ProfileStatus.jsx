import React from 'react'
import Loader from '../../Loader/Loader'

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props)
        
    }

    
    state = {
        editMode: false,
        status: this.props.status
    }


    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.status !== this.props.status){
            this.setState({status: this.props.status})
    }
    
    }


    render(){
       
            return (
          <div>
            <div>
                {this.state.editMode ? 
                <input onChange={(e) => {
                    this.setState({
                        status:  e.currentTarget.value
                    })
                }}  autoFocus value={this.state.status} onBlur={this.deactivateEditMode} ></input> :
                <span onDoubleClick={this.activateEditMode}>{this.props.status || 'changeStatus'}</span>}
            </div>
            
          </div>
    )
    }
        
}

export default ProfileStatus