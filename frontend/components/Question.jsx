import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.surface};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  height: 30px;
  //padding: 1.5rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.base};
  }
`;

const Item = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0 1rem 0;
`;

const Question = () => (
  <Wrapper>
    <Item>2 Sum</Item>
    <Item>Array</Item>
    <Item>False</Item>
    <Item>Easy</Item>
    <Item>10/31/20</Item>
  </Wrapper>
);

export default Question;