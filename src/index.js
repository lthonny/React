import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Profile/MyPosts/Post/Post";

let posts = [
    {id: 1, message: 'Vayy', likesCount: 25},
    {id: 2, message: 'Okey, frend', likesCount: 29},
    {id: 3, message: 'dasdadsaad', likesCount: 29},
    {id: 4, message: 'Ellooo', likesCount: 29},
    {id: 5, message: 'Sypers', likesCount: 29},
]

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Vasiliy'},
    {id: 6, name: 'Oleg'}
]

let messages = [
    {id: 1, message: 'HI'},
    {id: 2, message: 'How is your'},
    {id: 3, message: 'YOYO'},
    {id: 4, message: 'YOYO'},
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
