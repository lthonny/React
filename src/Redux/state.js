const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Vayy', likesCount: 25},
                {id: 2, message: 'Okey, frend', likesCount: 29},
                {id: 3, message: 'dasdadsaad', likesCount: 29},
                {id: 4, message: 'Ellooo', likesCount: 29},
                {id: 5, message: 'Sypers', likesCount: 29},
            ],
            newPostText: 'it-thonny.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Vasiliy'},
                {id: 6, name: 'Oleg'}
            ],
            messages: [
                {id: 1, message: 'HI'},
                {id: 2, message: 'How is your'},
                {id: 3, message: 'YOYO'},
                {id: 4, message: 'YOYO'},
            ],
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { //{type: 'ADD-POST'}
         if (action.type == 'ADD-POST') {
             let newPost = {
                 id: 5,
                 message: this._state.profilePage.newPostText,
                 likesCount: 34,
             };
             this._state.profilePage.posts.push(newPost);
             this._state.profilePage.newPostText = '';
             this._callSubscriber(this._state);
         } else if (action.type === "UPDATE-NEW-POST-TEXT") {
             this._state.profilePage.newPostText = action.newText;
             this._callSubscriber(this._state);
         }
    }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText : text });

export default store;
window.store = store;

