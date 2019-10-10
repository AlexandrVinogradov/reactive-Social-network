import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import { Route, withRouter, HashRouter, Switch, Redirect } from "react-router-dom";
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Provider, connect } from 'react-redux';
import { compose } from "redux";
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));


class App extends React.Component {

  catchAllUnhandleErrors = (reason, promise) => {
    alert('some error occured');
  }

  componentDidMount() {
    this.props.initializeApp();
    // отлавливаем все ошибки 
    window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
  }
  componentWillUnmount() {
    // убираем мусор за собой
    window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);
  }

  
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wraper-content'> 

        <Switch>
          <Route exact path='/'
            render={() => <Redirect to={'/profile'} />} />
          <Route path='/dialogs'
            render={withSuspense(DialogsContainer)} />
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route path='/news'
            render={() => <NewsContainer />} />
          <Route path='/music'
            render={() => <Music />} />
          <Route path='/settings'
            render={() => <Settings />} />
          <Route path='/friends'
            render={() => <Friends />} />
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/login'
            render={() => <Login />} />
          <Route path='*'
            render={() => <div>404 NOT FOUND</div>} />
        </Switch>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
//оборачиваем withRouter чтобы не было багов
const AppContainer = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter)(App);

const SamuraiJSApp = props => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter> 
}

export default SamuraiJSApp;
