import React from 'react';
import styled from 'styled-components/macro';

function MessagesLogin() {
  return (
    <LoginWrapper>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <LoginInput placeholder='User name' />
        <LoginInput placeholder='Password' />
      </LoginForm>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div``;
const LoginTitle = styled.h2``;
const LoginForm = styled.div``;
const LoginInput = styled.input.attrs({ type: 'text' })``;

export default MessagesLogin;
