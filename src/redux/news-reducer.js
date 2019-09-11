const ADD_NEW = 'ADD-NEW';


let initialState = {
    news: [
        { id: '1', content: 'This is firs news' },
        { id: '2', content: 'This is second news' },
        { id: '3', content: 'This is third news' },
        { id: '4', content: 'This is fourth news' }
    ],
}


const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW:
            let newText = action.newNewsText;
            return {
                ...state,
                news: [...state.news, {id: 5, content: newText} ],
                newsText: ''
            }
        default:
            return state;
    }
}

// action creator
export const addNew = (newNewsText) => ({ type: ADD_NEW, newNewsText });


export default newsReducer;