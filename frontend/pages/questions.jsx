import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Question from '../components/Question';
import QuestionsHeader from '../components/QuestionsHeader';

const Wrapper = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.surface};
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
    questions {
      id
      title
      dataStructure
      solved
      url
      difficulty
      userDifficulty
      solution
      createdAt
    }
  }
`;

const Questions = () => (
  <Wrapper>
    <Query query={ALL_QUESTIONS_QUERY}>
      {({ data: { questions } }) => {
        return (
          <>
            <QuestionsHeader />
            <QuestionList>
              {questions.map(question => <Question key={question.id} question={question} />)}
            </QuestionList>
          </>
        );
      }}
    </Query>

  </Wrapper>
);

export default Questions;