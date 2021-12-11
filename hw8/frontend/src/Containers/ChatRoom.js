import { Button, Input, Tag } from 'antd';
import Title from '../Components/Title';
import Message from '../Components/Message';


const ChatRoom = (props) => {
    const {messages, sendMessage, clearMessages, username, body, setBody, bodyRef, displayStatus} = props;
    return(
        <>
            <Title>
                <h1>{username}'s Chat Room</h1>
                <Button type="primary" danger onClick={clearMessages}>
                Clear
                </Button>
            </Title>
            <Message>
                {messages.length === 0 ? (<p style={{ color: '#ccc' }}> No messages... </p>)
                :(
                    messages.map(({ name, body }, i) => ( 
                    <p className="App-message" key={i}>
                        <Tag color="blue">{name}</Tag> {body} 
                    </p>))
                    )}
            </Message>
            {/* <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginBottom: 10 }}
                onKeyDown={(e) => {
                if(e.key === 'Enter'){
                    bodyRef.current.focus();
                }
                }}
            ></Input> */}
            <Input.Search
                // ref={bodyRef}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                enterButton="Send"
                placeholder="Type a message here..."
                onSearch={(msg) => {
                //檢查 username, textBody 是否為空值
                if(!msg || !username){
                    displayStatus({
                    type: 'error',
                    msg: 'Please enter a username and a message body.'
                    })
                    return;
                }
                sendMessage({ name: username, body: msg });
                setBody('');
                }}
            ></Input.Search>
        </>
    );
}

export default ChatRoom;