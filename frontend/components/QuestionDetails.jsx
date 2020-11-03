import React from 'react';
import { Query } from 'react-apollo';
import router from 'next/router';
import gql from 'graphql-tag';

const GET_QUESTION_BY_ID_QUERY = gql`
  query GET_QUESTION_BY_ID_QUERY ($id: Int!) {
    question (id: $id) {
      id
      title
      dataStructure
      solved
      url
      difficulty
      userDifficulty
      solution
      createdAt
      updatedAt
    }
  }
`;

const QuestionDetails = ({ id }) => {
  const idToNum = parseFloat(id);

  return (
    <Query query={GET_QUESTION_BY_ID_QUERY} variables={{ id: idToNum }}>
      {({ error, loading, data }) => {
        if (error) return <div>Error: {error}</div>
        if (loading) return <div>Loading...</div>
        const { id, title, difficulty, userDifficulty } = data.question;
        return (
          <div>{title}</div>
        );
      }}
    </Query >
  );
};


export default QuestionDetails;