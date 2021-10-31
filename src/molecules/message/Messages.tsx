import React, { useState } from 'react';
import styled from 'styled-components/macro';
import MessagesLogin from './MessagesLogin';

function Messages() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  return (
    <MessagesContainer>
      <MessageHeader>Messages</MessageHeader>
      {isLoggedIn ? <div>Temp</div> : <MessagesLogin />}
    </MessagesContainer>
  );
}

const MessagesContainer = styled.div`
  padding: 1rem;
`;
const MessageHeader = styled.h5`
  padding: 0;
  margin: 0;
  color: lightblue;
  font-size: 1.5rem;
`;  

export default Messages;
