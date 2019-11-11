import React, {PureComponent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLenghtCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { isPureish } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/@babel/types/lib';

const maxLength10 = maxLenghtCreator(10);

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field className={s.textarea} validate={[required, maxLength10]}
                name="newPostText" component={Textarea} />
        </div>
        <div>
            <button className={s.button}>Add post</button>
        </div>
    </form>
}
const AddPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

// React.memo doesnt works...
// const MyPosts = React.memo(props => {
//     console.log('RENDER MYPOSTS')
//     let postElements = props.profilePage.posts.map(p =>
//         <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

//     const addNewPost = (values) => {
//         props.addPost(values.newPostText);
//     }
//     return <div className={s.postsBlock}>
//         <h3 className={s.title}>My posts</h3>
//         <div>
//             <div>
//                 <AddPostFormRedux onSubmit={addNewPost} />
//             </div>
//         </div>
//         <div className={s.posts}>
//             {postElements}
//         </div>
//     </div>;
// });
// export default MyPosts;

class MyPosts extends PureComponent {

    render() {
        console.log('RENDER MYPOSTS')
        let postElements = this.props.profilePage.posts.map(p =>
            <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

        const addNewPost = (values) => {
            this.props.addPost(values.newPostText);
        }

        return <div className={s.postsBlock}>
            <h3 className={s.title}>My posts</h3>
            <div>
                <div>
                    <AddPostFormRedux onSubmit={addNewPost} />
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>;
    }
}



export default MyPosts;