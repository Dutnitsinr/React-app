// import logo from './logo.svg';
import  './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import News from '../src/components/News/News'
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer'




 
 
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <Header/>
      <Navbar store={props.store}/>
      
      <div className="app-wrapper-content">
              

              <Route path="/dialogs" render={ ()=> <DialogsContainer />}/>
              <Route path="/profile" render={ ()=> <Profile />}/>
              <Route path="/users" render={ ()=> <UsersContainer/>}/>
              <Route path="/news" render={ ()=> <News/>}/>
              <Route path="/music" render={ ()=> <Music/>}/>
              <Route path="/settings" render={ ()=> <Settings/>}/>

              
      </div>
      </div>
    </BrowserRouter>
  );
}

 


export default App;

