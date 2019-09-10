import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';

const MyPosts = (props) => {

    let state = props.profilePage;

    // p     =>    post
    let postElements = state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    let newPostText = state.newPostText;



    const addNewPost = (values) => {
        props.addPost(values.newPostText);
    }
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>;
}

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Enter your post" name="newPostText" component="textarea" />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;