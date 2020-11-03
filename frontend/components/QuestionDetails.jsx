import React, { Component } from 'react';
import { Query } from 'react-apollo';
import router from 'next/router';
import gql from 'graphql-tag';
import CreateQuestion from './CreateQuestion';

const GET_QUESTION_BY_ID_QUERY = gql`
  query GET_QUESTION_BY_ID_QUERY ($id: Int!) {
    question (id: $id) {
      id
      title
      url
      algorithm
      dataStructure
      solved
      difficulty
      userDifficulty
      notes
      userSolution
      solution
      timeSpent
      createdAt
      updatedAt
    }
  }
`;

class QuestionDetails extends Component {
  state = {
    editQuestion: false,
  }

  handleEditQuestion = () => {
    this.setState({
      editQuestion: !this.state.editQuestion,
    })
  }

  render() {
    const { id } = this.props;
    const idToNum = parseFloat(id);

    return (
      <Query query={GET_QUESTION_BY_ID_QUERY} variables={{ id: idToNum }}>
        {({ error, loading, data }) => {
          if (error) return <div>Error: {error}</div>
          if (loading) return <div>Loading...</div>
          if (this.state.editQuestion) return (<CreateQuestion question={data.question} />);
          const { id, title, difficulty, userDifficulty } = data.question;
          return (
            <div>{title}
              <button onClick={this.handleEditQuestion}>Edit Question</button>
            </div>
          );
        }}
      </Query >
    );
  }


};


export default QuestionDetails;
export { GET_QUESTION_BY_ID_QUERY };