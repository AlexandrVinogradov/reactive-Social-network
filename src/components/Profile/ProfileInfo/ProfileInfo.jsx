import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div>
            <img className={s.panorama} src='https://wallimpex.com/data/out/642/3840-x-1080-hd-wallpaper-9980030.jpg' />
        </div>

        <div className={s.description_block}>
            <div>
                <img className={s.avatar} src='https://previews.123rf.com/images/bigio/bigio1602/bigio160200004/52547413-sch%C3%B6ne-zuckersch%C3%A4del-frau-illustration-tag-der-toten-vektor-illustration-.jpg' />
            </div>
            <p>
                description
            </p>
        </div>
        
    </div>;
}

export default ProfileInfo;