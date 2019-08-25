import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import {
    setAuthUserData,
} from '../../redux/auth-reducer';
// import Preloader from '../common/Preloader/Preloader';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { // вторым параметром передаем настройки запроса (у нас: что мы авторизованны)
            withCredentials: true
        })
            .then(response => {
                // === 0 значит залогинины
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data; 
                    this.props.setAuthUserData(id, email, login);
                }


        });

    }
    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);