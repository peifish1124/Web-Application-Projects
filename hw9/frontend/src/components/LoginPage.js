import React from "react";
import { Button, Input } from "antd";

const LoginPage = ({ setUsername, setStartChat }) => {
    return (
        <>
            <section className="input-form">
                <div className="App-title">
                    <h1>My Chat Room</h1>
                </div>

                <Input
                    size="large"
                    placeholder="Enter Your Name"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <Button type="primary" onClick={() => setStartChat(true)}>
                    Sign In
                </Button>
            </section>
        </>
    );
};

export default LoginPage;