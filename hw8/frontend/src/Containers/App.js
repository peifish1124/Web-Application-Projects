import { message } from 'antd';
import { useEffect, useState, useRef } from 'react';
import useChat from '../Hooks/useChat';
import styled from 'styled-components';
import ChatRoom from './ChatRoom';
import SignIn from './SignIn';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 500px;
  margin: auto;
`;
const LOCALSTORAGE_KEY = "save-me"; 
const App = () => {
  const savedMe = localStorage.getItem(LOCALSTORAGE_KEY);
  const { status, messages, sendMessage, clearMessages } = useChat();
  const [ username, setUsername ] = useState(savedMe || '');
  const [ body, setBody ] = useState(''); // textBody
  const [ signedIn, setSignedIn ] = useState(false);

  const bodyRef = useRef(null);

  const displayStatus = (payload) => {
    if(payload.msg){
      const {type,msg} = payload;
      const content = {content: msg, duration: 0.5};
      switch(type){
        case "success":{
          message.success(content);
          break;
        } 
        case "error":{
          message.error(content);
          break;
        }
        default:break;
      }
    }
  };

  useEffect(() => {
    displayStatus(status);
  },[status]);

  useEffect(() => { 
    if (signedIn) {
      localStorage.setItem(LOCALSTORAGE_KEY, username);
    }
  }, [signedIn, username]);

  return (
    <Wrapper>
      {signedIn?(
        <ChatRoom 
        messages={messages}
        sendMessage={sendMessage}
        clearMessages={clearMessages}
        username={username}
        body={body}
        setBody={setBody}
        bodyRef={bodyRef}
        displayStatus={displayStatus}
      />
      ):(
        <SignIn 
        setSignedIn={setSignedIn}
        username={username}
        setUsername={setUsername}
        displayStatus={displayStatus}
        />
      )}
    </Wrapper>
  )
}

export default App
