import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return <div className={s.userInfo}>
        <div>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null
                    ? user.photos.small
                    : userPhoto} className={s.avatar} />
            </NavLink>
        </div>
        <div>
            {user.followed
                ? <button disabled={followingInProgress
                    .some(id => id === user.id)}
                    onClick={() => { unfollow(user.id) }}>
                    Unfollow</button>

                : <button className={s.btnFollou} disabled={followingInProgress
                    .some(id => id === user.id)}
                    onClick={() => { follow(user.id) }}>
                    Follow</button>}
        </div>
        <div>
            <div>{user.name}</div>
            <div>{user.status}</div>
        </div>
        </div>
}
export default User;