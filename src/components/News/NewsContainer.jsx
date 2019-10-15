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
const NewsContainer = connect(mapStateToProps, {
    addNew
})(News);

export default NewsContainer;

