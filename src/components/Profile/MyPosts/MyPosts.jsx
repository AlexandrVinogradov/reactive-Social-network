import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {
    debugger;
    let state = props.store.getState().profilePage;

    // p     =>    post
    let postElements = state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    let newPostText = state.newPostText;




    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch( updateNewPostTextActionCreator(text) );
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                    placeholder={'Enter your post'}
                    value={newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>;
}

export default MyPosts;