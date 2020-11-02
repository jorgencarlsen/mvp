import React from 'react';
import styled from 'styled-components';
import { dataStructureMap } from '../lib/dataStructures';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.surface};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  height: 30px;

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

const DataSpan = styled.span`

`;

const Question = ({ question }) => {
  const { title, dataStructure, solved, difficulty, createdAt } = question;



  return (
    <Wrapper>
      <Item>{title}</Item>
      <Item>{dataStructure.map(data => `${dataStructureMap[data]} `)}</Item>
      <Item>{solved}</Item>
      <Item>{difficulty}</Item>
      <Item>{createdAt}</Item>
    </Wrapper>
  )
};

export default Question;