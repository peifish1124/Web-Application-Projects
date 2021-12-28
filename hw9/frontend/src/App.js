import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import useChat from "./hooks/useChat";
import { message } from "antd";
import ChatPage from "./components/ChatPage";
import LoginPage from "./components/LoginPage";

function App() {
    const { status, messages, sendMessage, clearMessages } = useChat();
    const [startChat, setStartChat] = useState(false);
    const [username, setUsername] = useState("");

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
                case "danger":
                default:
                    message.error(content);
                    break;
            }
        }
    };

    useEffect(() => {
        displayStatus(status);
    }, [status]);

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
