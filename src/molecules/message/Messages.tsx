import React, { useState } from 'react';
import styled from 'styled-components/macro';
import MessagesLogin from './MessagesLogin';

function Messages() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <MessagesContainer>
      <MessageHeader>Messages</MessageHeader>
      {isLoggedIn ? <div>Temp</div> : <MessagesLogin />}
    </MessagesContainer>
  );
}

const MessagesContainer = styled.div``;
const MessageHeader = styled.div``;

export default Messages;
