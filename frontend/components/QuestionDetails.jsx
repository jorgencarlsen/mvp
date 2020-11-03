import React, { Component } from 'react';
import { Query } from 'react-apollo';
import router from 'next/router';
import gql from 'graphql-tag';
import styled from 'styled-components';
import CreateQuestion from './CreateQuestion';
import DifficultyMeter from './DifficultyMeter';

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

const Container = styled.div`
  width: 900px;
  height: 100vh;
  background-color: ${({ theme }) => theme.surface};
  border-radius: 5px;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4fr 4fr;
`;

const Header = styled.div`
  color: ${({ theme }) => theme.vibrantWhite};
`;

const Difficulty = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
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
            <>
              <Header>
                <h2>{title}</h2>
                <button onClick={this.handleEditQuestion}>Edit Question</button>
              </Header>
              <Container>
                <Difficulty>
                  <DifficultyMeter difficulty={difficulty} label={'Difficulty'} />
                  <DifficultyMeter difficulty={userDifficulty} label={'Percieved Difficulty'} />
                </Difficulty>
              </Container>
            </>
          );
        }}
      </Query >
    );
  }


};


export default QuestionDetails;
export { GET_QUESTION_BY_ID_QUERY };