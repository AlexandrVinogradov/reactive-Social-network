import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile
} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from "redux";



class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
 
    componentDidMount() {

        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }

    }

    render() {
        return (
            <Profile {...this.props} 
            isOwner={!this.props.match.params.userId}
            savePhoto={this.props.savePhoto}
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus}/>
        )
    }
}


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status, 
    authorizedUserId:  state.auth.userId, 
    isAuth: state.auth.isAuth
});

// compose берет Dialog, закидывает его в withAuthRedirect, 
//далее результат закидывает в withRouter => connect
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    // withAuthRedirect   это hoc
)(ProfileContainer);