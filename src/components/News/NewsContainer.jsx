import React from 'react';
import { 
    addNew 
} from '../../redux/news-reducer';
import News from './News';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSendNewsClick: (newNewsText) => {
//             dispatch(addNewActionCreator(newNewsText));
//         }
//     }
// }


const NewsContainer = connect(mapStateToProps, {
    addNew
})(News);

export default NewsContainer;

