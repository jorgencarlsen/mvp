import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.surface};
`;

const Questions = () => (
  <Wrapper>
    <div>I am the questions page</div>
  </Wrapper>
);

export default Questions;