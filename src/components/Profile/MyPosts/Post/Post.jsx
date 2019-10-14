import React from 'react';
import s from './Post.module.css';
import avatar from '../../../../assets/images/avatar.jpg';

export const Post = React.memo(props => {
    return <div className={s.item}>
        <img src={avatar} />
        {props.message}
        <div className={s.post}>
            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
            {props.likesCount}
            <span> like</span>

        </div>
        <div className={s.line}></div>
    </div>;
});

export default Post;


