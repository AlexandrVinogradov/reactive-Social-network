let rerenderEntireTree = () => {
    console.log('state chanhed');
}

let state = {
    profilePage: {
        posts: [
            { id: '1', message: 'Hi, how are you?', likesCount: 13 },
            { id: '2', message: '123', likesCount: 19 },
            { id: '2', message: 'dddddddddd', likesCount: 121 },
            { id: '2', message: 'gdsgsdgsgsgs', likesCount: 1245 },
            { id: '2', message: 'IccccxDDDx', likesCount: 9 }
        ],
        newPostText: 'texarea'
    },
    dialogsPage: {
        dialogs: [
            { id: '1', name: 'Adriana' },
            { id: '2', name: 'Roberto' },
            { id: '3', name: 'Gabriela' },
            { id: '4', name: 'Gerardo' },
            { id: '5', name: 'Camila' },
            { id: '6', name: 'Silvia' }
        ],
        messages: [
            { id: '1', message: 'hi' },
            { id: '2', message: 'Hoy are you?' },
            { id: '3', message: 'Yo' }
        ],
        newMessageText: 'enter your message'
    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}



export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText   
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}
export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}



export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;