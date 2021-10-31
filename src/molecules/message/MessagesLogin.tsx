import React from 'react';
import styled from 'styled-components/macro';

function MessagesLogin() {
  return (
    <LoginWrapper>
      <LoginForm>
        <LoginInput placeholder='User name' />
        <LoginInput placeholder='Password' />
      </LoginForm>
      <LoginButton>Login</LoginButton>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LoginForm = styled.div``;
const LoginInput = styled.input.attrs({ type: 'text' })`
  width: 12rem;
  margin: 0.5rem;
  background-color: white;
  border: 3px solid rgb(210, 210, 210);
  border-radius: 0.2rem;
  height: 3rem;
  font-size: 1.2rem;
`;
const LoginButton = styled.button`
  border: none;
  border-radius: 0.2rem;
  height: 3rem;
  width: 8rem;
  background-color: rgb(210, 210, 210);
  font-size: 1.2rem;
  cursor: pointer;
`

export default MessagesLogin;
