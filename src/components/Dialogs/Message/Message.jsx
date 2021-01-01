import React from 'react';
import s from './../Dialogs.module.css';

// const MessagePhoto = () => {
//     return (
//         <div className={s.avatar}>
//             <img src='https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg'/>
//         </div>
//     )
// }

let newMessageElement = React.createRef();
let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text)
}

const Message = (props) => {
    return (
        <div className={s.dialogs}>
            {props.message}
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>add message</button>
        </div>

    )
}

export default Message;