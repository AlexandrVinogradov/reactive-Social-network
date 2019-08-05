import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import {Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';






const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wraper-content'>

        <Route path='/dialogs'
          render={() => <DialogsContainer store={props.store} />} />

        <Route path='/profile'
          render={() => <Profile store={props.store} />} />

        <Route path='/news'
          render={() => <NewsContainer store={props.store} />} />

        <Route path='/music'
          render={() => <Music />} />
        <Route path='/settings'
          render={() => <Settings />} />
        <Route path='/friends'
          render={() => <Friends />} />
      </div>
    </div>
  )
}

export default App;
