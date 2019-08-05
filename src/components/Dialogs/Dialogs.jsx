import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';




const Dialogs = (props) => {
debugger;
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = props.state.messages.map(m => <MessageItem message={m.message} />);

    let newMessageElemnt = React.createRef();

    let addMessage = () => {
        props.dispatch( addMessageActionCreator() );
    }

    let onMessageChange = () => {
        let text = newMessageElemnt.current.value;
        props.dispatch( updateNewMessageTextActionCreator(text) );
    }
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                {dialogsElements}
            </ul>
            <ul className={s.messages}>
                {messageElements}
            </ul>
            <div>
                <div>
                    <textarea onChange={onMessageChange}
                        ref={newMessageElemnt}
                        placeholder={'Enter your message'}
                        value={props.newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;