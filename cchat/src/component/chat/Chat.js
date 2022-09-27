import React, { useEffect, useState } from 'react'
import {user} from '../join/Join';
import socketIo from "socket.io-client";
import './Chat.css';
import Message from '../Message/Message';
import ReactScrollToBottom from 'react-scroll-to-bottom';
import closeIcon from  '../../images/closeIcon.jpg'
 
let socket;

const ENDPOINT = " https://chatapp2-project.herokuapp.com/";


const Chat = () => {
    const [id, setid] = useState("");
    const [messages, setMessages] = useState([])

    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id });
        document.getElementById('chatInput').value = "";
    }
     useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] });
        

        socket.on('connect', () => {
            setid(socket.id);

        })
        
        socket.emit('joined', {user})

        socket.on('welcome', (data) => {
        setMessages(messages=>[...messages, data]);
        
        })
        
       return () => {
            socket.emit('disconnected');
            socket.off();
        }
    }, [])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages(messages=>[...messages, data]);
            console.log(data.user, data.message, data.id);
        })
        return () => {
            socket.off();
        }
    }, [messages])
    

    return (
        <div className="chatPage">
            <div className="chatContainer">
                <div className="header">
                    <h2>C CHAT</h2>
                    <a href="/"> <img src={closeIcon} alt="Close" /></a>
                </div>
                <ReactScrollToBottom className="chatBox">
                    {messages.map((item, key) => <Message key={key} user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom>
                <div className="inputBox">
                    <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
                    <button onClick={send} className="sendBtn">send</button>
                </div>
            </div>

        </div>
    )
}

export default Chat
