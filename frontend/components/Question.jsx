import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Router from 'next/router';
import { dataStructureMap } from '../lib/dataStructures';
import { difficultyMap } from '../lib/difficulties';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.surface};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  height: 30px;
  color: ${({ theme }) => theme.vibrantWhite};
  border-top: 1px solid ${({ theme }) => theme.overlayLight};
  padding-top: .5rem;

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
  background-color: ${({ theme }) => theme.blue};
  padding: 1px 4px;
  border-radius: 3px;
  margin-right: 5px;
  color: ${({ theme }) => theme.vibrantWhite};
`;

const SolvedSpan = styled.span`
  background-color: ${({ theme, solved }) => solved ? theme.seaGreen : theme.required};
  padding: 1px 4px;
  color: ${({ theme }) => theme.base};
  border-radius: 3px;
  margin-right: 5px;
`;

const Question = ({ question }) => {
  const { id, title, dataStructure, solved, difficulty, createdAt } = question;

  const solvedString = solved ? 'Y' : 'N';
  const date = moment(createdAt).format("MMM DD");

  const handleSelectQuestion = () => {
    Router.push({
      pathname: '/question',
      query: { id },
    });
  }

  return (
    <Wrapper onClick={handleSelectQuestion}>
      <Item>{title}</Item>
      <Item>
        {dataStructure.map(data => (
          <DataSpan key={Math.random() * 10}>{`${dataStructureMap[data]} `}</DataSpan>
        ))}
      </Item>
      <Item>{<SolvedSpan solved={solved}>{`${solvedString} `}</SolvedSpan>}</Item>
      <Item>{difficultyMap[difficulty]}</Item>
      <Item>{date}</Item>
    </Wrapper>
  )
};

export default Question;