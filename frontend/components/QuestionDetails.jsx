import React, { Component } from 'react';
import { Query } from 'react-apollo';
import router from 'next/router';
import gql from 'graphql-tag';
import styled from 'styled-components';
import CreateQuestion from './CreateQuestion';
import DifficultyMeter from './DifficultyMeter';
import DataStructureTag from './DataStructureTag';
import AlgorithmTag from './AlgorithmTag';

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

const Wrapper = styled.div`
color: ${({ theme }) => theme.vibrantWhite};

h5 {
  font-size: 2rem;
  font-weight: 400;
  padding: 0;
  padding-bottom: 1rem;
  margin: 0;
}
`;

const Container = styled.div`
  width: ${({ theme }) => theme.maxWidth};
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
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: 1fr;

  h2 {
    padding: 0;
    margin: 0;
  }
`;

const Difficulty = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Controls = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
// display: flex;
// flex-flow: row nowrap;
// justify-content: flex-end;
// align-items: flex-start;

a {
  button {
    color: ${({ theme }) => theme.base};
    background-color: ${({ theme }) => theme.seaGreen};
    margin-right: 1rem;
  }
}

.solution {
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.required};
}

  button {
    max-width: 100px;
  }
`;

const DataStructureContainer = styled.div`
  margin: 1rem .5rem 0 0;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.overlayDark};
  box-shadow: 1px 1px 6px 2px rgba(0,0,0,0.13);
  font-size: 2rem;
`;

const NotesContainer = styled.div`
  margin: 1rem 0 0 .5rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.overlayDark};
  box-shadow: 1px 1px 6px 2px rgba(0,0,0,0.13);
  font-size: 1.5rem;
`;

const AlgorithmContainer = styled.div`
  margin: 1rem .5rem 0 0;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.overlayDark};
  box-shadow: 1px 1px 6px 2px rgba(0,0,0,0.13);
  font-size: 2.5rem;
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
          const { id, title, url, difficulty, userDifficulty, dataStructure, algorithm, notes, solution, userSolution } = data.question;

          return (
            <Wrapper>
              <Header>
                <h2>{title}</h2>
                <div></div>
                <div></div>
              </Header>
              <Container>
                <Difficulty>
                  <DifficultyMeter difficulty={difficulty} label={'Difficulty'} />
                  <DifficultyMeter difficulty={userDifficulty} label={'Percieved Difficulty'} />
                </Difficulty>
                <Controls>
                  {url && <a href={url}>
                    <button>Go to Problem</button>
                  </a>}
                  {solution && <a href={solution}>
                    <button className='solution'>Solution</button>
                  </a>}
                  {userSolution && <a href={userSolution}>
                    <button className='solution'>My Solution</button>
                  </a>}
                  <button onClick={this.handleEditQuestion}>Edit Question</button>
                </Controls>
                <DataStructureContainer>
                  <h5>Data Structures</h5>
                  {dataStructure.map(el => <DataStructureTag label={el} />)}
                </DataStructureContainer>
                <NotesContainer>
                  <h5>Notes</h5>
                  <div>
                    {notes}
                  </div>
                </NotesContainer>
                <AlgorithmContainer>
                  <h5>Algorithms</h5>
                  {algorithm.map(el => <AlgorithmTag label={el} />)}
                </AlgorithmContainer>
              </Container>
            </Wrapper>
          );
        }}
      </Query >
    );
  }


};


export default QuestionDetails;
export { GET_QUESTION_BY_ID_QUERY };