import React from "react";
import { Button, Input } from "antd";
import "./LoginPage.css";

const LoginPage = ({ setUsername, setStartChat }) => {
    return (
        <>
            <section className="input-form">
                <div className="App-title">
                    <h1>Login Page</h1>
                </div>

                <Input
                    size="large"
                    placeholder="Please Enter Your Name..."
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <Button type="primary" onClick={() => setStartChat(true)}>
                    Start Chat
                </Button>
            </section>
        </>
    );
};

export default LoginPage;