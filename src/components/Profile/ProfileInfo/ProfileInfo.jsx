import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.jpg';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader />
    }
    const mainPhotoSelectrd = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
    <div>
        {/* <div>
            <img className={s.panorama} src='https://wallimpex.com/data/out/642/3840-x-1080-hd-wallpaper-9980030.jpg' />
        </div> */}
        <div className={s.description_block}>
            <img className={s.avatar} src={profile.photos.large || userPhoto}/>
            {isOwner && <input type={'file'} onChange={mainPhotoSelectrd}/>}
            <p>
                {profile.aboutMe}
            </p>
        </div>
        <ProfileStatusWithHooks status={status}  updateStatus={updateStatus}/>
    </div>
    )
}

export default ProfileInfo;