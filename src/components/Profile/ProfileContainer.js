import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    setUserProfile
} from '../../redux/profile-reducer';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                // setUserProfile - AC
                this.props.setUserProfile(response.data);
            });
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

// когда функция возвращает объект - надо ставить круглые скобки
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile

});

// withRouter работает как conect. тоже отрисует новую компоненту, но в нее закинутся данные из url 
// теперь эту переменную в connect вместо ProfileContainer
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);