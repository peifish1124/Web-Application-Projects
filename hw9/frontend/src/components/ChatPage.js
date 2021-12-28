import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Tag } from "antd";
import { useQuery } from "@apollo/client";
import { MESSAGE_QUERY, MESSAGE_SUBSCRIPTION} from "../graphql";

const ChatPage = ({ sendMessage, clearMessages, username, displayStatus }) => {
    const [body, setBody] = useState("");
    const [receiver, setReceiver] = useState("");
    const bodyRef = useRef(null);

    const { loading, error, data, subscribeToMore } = useQuery(MESSAGE_QUERY, {
        variables: { from: username, to: username },
    });

    useEffect(() => {
        subscribeToMore({
            document: MESSAGE_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;

                if (subscriptionData.data.Messages.mutation === "CLEARED")
                    return { Messages: [] };
                const newMsg = subscriptionData.data.Messages.data;
                if (newMsg.from !== username && newMsg.to !== username) {
                    return prev;
                }

                return {
                    ...prev,
                    Messages: [...prev.Messages, newMsg],
                };
            },
        });
    }, [subscribeToMore]);

    return (
        <>
            <div className="App-title">
                <h1>{username}'s ChatRoom</h1>
                <Button
                    type="primary"
                    danger
                    onClick={() => clearMessages(username)}
                >
                    Clear
                </Button>
            </div>
            <h2>{`Welcome, ${username}`}</h2>
            <div className="App-messages">
                {loading ? (
                    <p style={{ color: "#ccc" }}>Loading...</p>
                ) : data.Messages.length === 0 ? (
                    <p style={{ color: "#ccc" }}>No message...</p>
                ) : (
                    data.Messages.map(({ from, to, body }, i) =>
                        to === username ? (
                            <div className="App-message-get" key={i}>
                                <Tag color="blue">{`${from}:`}</Tag> {body}
                            </div>
                        ) : (
                            <div className="App-message-sent" key={i}>
                                <Tag color="red">{`-> ${to}`}</Tag>
                                {body}
                            </div>
                        )
                    )
                )}
            </div>
            <Input
                placeholder="Send to..."
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
                style={{ marginBottom: 10 }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        bodyRef.current.focus();
                    }
                }}
            ></Input>
            <Input.Search
                // rows={4}
                value={body}
                ref={bodyRef}
                enterButton="Send"
                onChange={(e) => setBody(e.target.value)}
                placeholder="Type a message here..."
                onSearch={(msg) => {
                    if (!msg || !receiver) {
                        displayStatus({
                            type: "error",
                            msg: "Please enter a username and a message body.",
                        });
                        return;
                    } else if (receiver === username) {
                        displayStatus({
                            type: "error",
                            msg: "Cannot Send message to yourself!",
                        });
                        return;
                    }
                    sendMessage({ from: username, to: receiver, body: msg });
                    setBody("");
                }}
            ></Input.Search>
        </>
    );
};

export default ChatPage;
