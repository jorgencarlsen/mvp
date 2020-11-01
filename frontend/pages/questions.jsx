import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Question from '../components/Question';

const Wrapper = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.surface};
`;

const QuestionsHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${({ theme }) => theme.vibrantWhite};
`;

const ColumnsHeader = styled.div`
  width: 100%;
  height: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

const ColumnHead = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const QuestionList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const ALL_QUESTIONS_QUERY = gql`
  query ALL_QUESTIONS_QUERY {
    questionList {
      id
      title
      dataStructure {
        name
      }
      solved
      url
      difficulty {
        name
      }
      userDifficulty
      solution
      createdAt
    }
  }
`;

const Questions = () => (
  <Wrapper>
    <Query query={ALL_QUESTIONS_QUERY}>
      {({ data: { questionList } }) => {
        console.log(questionList);
        return <p>I am the child of query!</p>;
      }}
    </Query>
    <QuestionsHeader>
      <Title>
        <h2>Interview Questions</h2>
      </Title>
      <ColumnsHeader>
        <ColumnHead>
          Title
        </ColumnHead>
        <ColumnHead>
          Data Structure
        </ColumnHead>
        <ColumnHead>
          Solved
        </ColumnHead>
        <ColumnHead>
          Difficulty
        </ColumnHead>
        <ColumnHead>
          Date
        </ColumnHead>
      </ColumnsHeader>
    </QuestionsHeader>
    <QuestionList>
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </QuestionList>
  </Wrapper>
);

export default Questions;