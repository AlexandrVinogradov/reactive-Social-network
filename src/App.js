import React from 'react'
import './App.scss'
import { Route, withRouter, HashRouter, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'
import { compose } from 'redux'
import Navbar from './components/Navbar/Navbar'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Friends from './components/Friends/Friends'
import NewsContainer from './components/News/NewsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import store from './redux/redux-store'
import { withSuspense } from './hoc/withSuspense'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

class App extends React.Component {
  componentDidMount() {
    const { initializeApp } = this.props
    initializeApp()
    // catching every mistakes
    window.addEventListener('unhandledrejection', this.catchAllUnhandleErrors)
  }

  componentWillUnmount() {
    // deleting garbage
    window.removeEventListener('unhandledrejection', this.catchAllUnhandleErrors)
  }

  catchAllUnhandleErrors = (reason, promise) => {
    // alert('some error occured');
  }

  render() {
    const { initialized } = this.props
    if (!initialized) {
      return <Preloader />
    }
    return (
      <div>
        <HeaderContainer />
        <div className="app-wrapper">
          <Navbar />
          <div className="app-wraper-content">
            <Switch>
              <Route exact path="/" render={() => <Redirect to={'/profile'} />} />
              <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/news" render={() => <NewsContainer />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/friends" render={() => <Friends />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="*" render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  initialized: state.app.initialized,
})
// withRouter needs for elimination of bugs
const AppContainer = compose(connect(mapStateToProps, { initializeApp }), withRouter)(App)

const SamuraiJSApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

App.propTypes = {
  initialized: PropTypes.bool.isRequired,
  initializeApp: PropTypes.func.isRequired,
}

export default SamuraiJSApp
