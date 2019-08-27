import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    getUserProfile
} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
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

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);