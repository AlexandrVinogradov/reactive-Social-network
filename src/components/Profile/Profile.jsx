import React from 'react';
import s from './Profile.module.css';  // doesn`t needed?
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return <div>
        <ProfileInfo />
        <MyPosts store={props.store}
            // newPostText={props.store.newPostText}
            dispatch={props.dispatch} />
    </div>;
}

export default Profile;