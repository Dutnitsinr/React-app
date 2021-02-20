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




 
 
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <Header/>
      <Navbar store={props.store}/>
      
      <div className="app-wrapper-content">
              {/* <Route path="/dialogs" component={Dialogs}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/news" component={News}/>
              <Route path="/music" component={Music}/>
              <Route path="/settings" component={Settings}/> */}

              <Route path="/dialogs" render={ ()=> <DialogsContainer 
              
               />}/>
              <Route path="/profile" render={ ()=> <Profile 
               
                
              />}/>
              <Route path="/news" render={ ()=> <News/>}/>
              <Route path="/music" render={ ()=> <Music/>}/>
              <Route path="/settings" render={ ()=> <Settings/>}/>

              
      </div>
      </div>
    </BrowserRouter>
  );
}

 


export default App;

