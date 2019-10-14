const ADD_NEW = 'ADD-NEW';


let initialState = {
    news: [
        { id: '1', content: 'Last month - June 2019 - 10th edition of ECMA-262 standard was officially published. What does it mean? - Well, ECMAScript 2019 is here!' },
        { id: '2', content: 'The latest and greatest specification for JavaScript and other derivatives languages to follow.' },
        { id: '3', content: 'And while you may already have heard of some of its new features, we`ll recall all of them! Plus some ECMAScript details and a sneak-peak of what`s coming next!' }
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