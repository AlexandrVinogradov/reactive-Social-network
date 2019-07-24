import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.posts}>
        <Post message="Hi, hoy are you?" likesCount="13 " />
        <Post message="It`s my first post" likesCount="19 "/>
    </div>;
}

export default MyPosts;