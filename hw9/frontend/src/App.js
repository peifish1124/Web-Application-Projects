import "./App.css";
import React, { useEffect, useState } from "react";
import useChat from "./hooks/useChat";
import { message } from "antd";
import ChatPage from "./components/ChatPage";
import LoginPage from "./components/LoginPage";

const LOCALSTORAGE_KEY = "save-me"; 
function App() {
    const savedMe = localStorage.getItem(LOCALSTORAGE_KEY);
    const { status, messages, sendMessage, clearMessages } = useChat();
    const [startChat, setStartChat] = useState(false);
    const [username, setUsername] = useState(savedMe || '');

    const displayStatus = (s) => {
        if (s.msg) {
            const { type, msg } = s;
            const content = {
                content: msg,
                duration: 0.5,
            };

            switch (type) {
                case "success":
                    message.success(content);
                    break;
                case "info":
                    message.info(content);
                    break;
                default:
                    message.error(content);
                    break;
            }
        }
    };

    useEffect(() => {
        displayStatus(status);
    }, [status]);

    useEffect(() => { 
        if (startChat) {
          localStorage.setItem(LOCALSTORAGE_KEY, username);
        }
      }, [startChat, username]);

    return startChat ? (
        <div className="App">
            <ChatPage
                messages={messages}
                sendMessage={sendMessage}
                clearMessages={clearMessages}
                username={username}
                displayStatus={displayStatus}
            />
        </div>
    ) : (
        <LoginPage setUsername={setUsername} setStartChat={setStartChat} />
    );
}

export default App;
