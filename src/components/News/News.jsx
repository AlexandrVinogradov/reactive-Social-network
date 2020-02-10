import React from 'react';
import s from './News.module.scss';
import NewsItem from './NewsItem/NewsItem';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';

const News = (props) => {
    let state = props.newsPage;
    let newsElements = state.news.map(n => <NewsItem content={n.content} id={n.id} />);
    let onAddNews = (values) => {
        props.addNew(values.newNewsText);
    }
    return (
        <div>
            <b>News:</b>
            <div>
                <div className={s.newsBlock}>
                    {newsElements}  
                </div>
                <div>
                    <AddNewsFormRedux onSubmit={onAddNews} />
                </div>
            </div>
        </div>
    )
}
const AddNewNewsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Enter your news" name="newNewsText" component={Textarea} />
        </div>
        <div>
            <button className={s.btnAddNew}>Add news</button>
        </div>
    </form>
}
const AddNewsFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewNewsForm);
export default News;

