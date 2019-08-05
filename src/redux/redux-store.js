import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer"
import newsReducer from "./news-reducer"
import dialogsReducer from "./dialogs-reducer"

// склеивает reduser(ы) в кучу
// ключ как в state
let reducers = combineReducers({
    profilePage: profileReducer,
    newsPage: newsReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);

export default store;


// в установленном redux(е) уже есть:
// subscribe(), getState(), dispatch(action)
// но нет логики, которую мы прописали в reduser(ы)