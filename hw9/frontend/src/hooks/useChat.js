import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_MESSAGE_MUTATION, CLEAR_MESSAGE_MUTATION } from "../graphql";

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState({});
    const [addMsg] = useMutation(CREATE_MESSAGE_MUTATION);
    const [clearMsg] = useMutation(CLEAR_MESSAGE_MUTATION);

    const sendMessage = (msg) => {
        if (!msg.to || !msg.body) return;

        addMsg({
            variables: {
                from: msg.from,
                to: msg.to,
                body: msg.body,
            },
        });

        setStatus({ type: "success", msg: "Message sent success!" });
    };

    const clearMessages = (user) => {
        clearMsg({
            variables: {
                user: user,
            },
        });

        setStatus({ type: "info", msg: "Message cleared success!" });
    };

    return {
        status,
        messages,
        sendMessage,
        clearMessages,
    };
};

export default useChat;
