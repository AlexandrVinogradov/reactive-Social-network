import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLenghtCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLenghtCreator(10);

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required, maxLength10]} placeholder="Enter your post"
                name="newPostText" component={Textarea} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}
const AddPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);




// для того, чтобы внутрення компонента не отрисоваыволась просто так - оборачиваем ее React.memo, но не работет..
const MyPosts = React.memo(props => {
    console.log('RENDER')
    let postElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    const addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <AddPostFormRedux onSubmit={addNewPost} />
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>;
});
export default MyPosts;