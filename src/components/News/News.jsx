import React from 'react';
import s from './News.module.css';
import NewsItem from './NewsItem/NewsItem';
import { reduxForm, Field } from 'redux-form';

const News = (props) => {

    let state = props.newsPage;
    debugger
    let newsElements = state.news.map(n => <NewsItem content={n.content} id={n.id} />);
    let newsText = state.newsText;


    let onAddNews = (values) => {
        props.addNew(values.newNewsText);
    }

    return (
        <div>
            News
            <div>
                <div>
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
            <Field placeholder="Enter your news" name="newNewsText" component="textarea" />
        </div>
        <div>
            <button>Add news</button>
        </div>
    </form>
}
const AddNewsFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewNewsForm);
export default News;

