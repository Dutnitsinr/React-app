
import React from 'react'
import  './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import News from '../src/components/News/News'
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersComponent from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer'
import { compose } from 'redux';
import Loader from './components/Loader/Loader';

 
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
 }
  render(){
    if(!this.props.initialized ){
      return <Loader/>
    }

      return (
        <BrowserRouter>
          <div className="app-wrapper">
          <HeaderContainer/>
          <Navbar store={this.props.store}/>
          
          <div className="app-wrapper-content">
                  {/* <Route path="/dialogs" component={Dialogs}/>
                  <Route path="/profile" component={Profile}/>
                  <Route path="/news" component={News}/>
                  <Route path="/music" component={Music}/>
                  <Route path="/settings" component={Settings}/> */}
  
                  {/* <Route path="/dialogs" render={ ()=> <DialogsContainer 
                  
                  />}/> */}
                  <Route path="/profile/:userId?" render={ ()=> <ProfileContainer
                  
                    
                  />}/>
                  <Route path="/news" render={ ()=> <News/>}/>
                  <Route path="/users" render={() => <UsersComponent/>}/>
                  <Route path="/login" render={() => <Login/>}/>
  
                  
          </div>
          </div>
        </BrowserRouter>
      );
    }
     
  }


const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

 


export default connect(mapStateToProps, {initializeApp})(App)

