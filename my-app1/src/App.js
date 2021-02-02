import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route,BrowserRouter} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
    <div className="app-writter">
<Header />
<Navbar/>
<div className = "app-writter-body">
    <Route path='/dialogs' component={Dialogs}/>
    <Route path='/profile' component={Profile}/>
    <Route path='/news' component={News}/>
    <Route path='/music' component={Music}/>
    <Route path='/settings' component={Settings}/>

</div>


  
</div>
          </BrowserRouter>
)
}



export default App;