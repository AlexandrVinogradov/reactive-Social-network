import React, { useState } from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.jpg';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader />
    }
    const mainPhotoSelectrd = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => { // 97 1:09:00
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }
    return (
        <div>
            <div className={s.description_block}>
                <div className={s.highBlock}>
                    <div>
                        <img className={s.avatar} src={profile.photos.large || userPhoto} />
                        {isOwner &&
                            <label for='file'>
                                Choose avatar
                            </label>
                        }
                    </div>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> //initialValues передаем profile, как стартовые значения
                        : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

                </div>
                {isOwner && <input type={'file'} id='file' onChange={mainPhotoSelectrd} />}
                
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

            </div>
        </div>
    )
}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        <div>
            {isOwner && <button className={s.btnEdit} onClick={goToEditMode}>Edit</button>}
        </div>
        <ul>
            <li>
                <b>Full name</b>: {profile.fullName}
            </li>
            <li>
                <b>About me</b>: {profile.aboutMe || ' ---'}
            </li>
            <li>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </li>
            {profile.lookingForAJob &&
                <li>
                    <b>My professionals skills</b>: {profile.lookingForAJobDescription}
                </li>
            }
            <li>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </li>
        </ul>
    </div>
}
const Contact = ({ contactTitle, contactValue }) => {
    if (contactValue === "" || contactValue === null) {
        return contactTitle = null
    }
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}
export default ProfileInfo;