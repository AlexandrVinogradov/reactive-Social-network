const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: '1', message: 'Hi, how are you?', likesCount: 13 },
        { id: '2', message: '123', likesCount: 19 },
        { id: '3', message: 'dddddddddd', likesCount: 121 },
        { id: '4', message: 'gdsgsdgsgsgs', likesCount: 1245 },
        { id: '5', message: 'IccccxDDDx', likesCount: 9 }
    ],
    newPostText: '',
    profile: null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 6, message: newPost, likesCount: 0 }]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

// action creator
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;

