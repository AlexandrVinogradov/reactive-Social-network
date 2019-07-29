import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src="https://i.pinimg.com/originals/09/4f/c6/094fc6adfddb1ba0fc6f73083e7c03bf.jpg" />
        {props.message}
        <div>
            {props.likesCount}
            <span> like</span>
        </div>
    </div>;
}

export default Post;