import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const CREATE_QUESTION_MUTATION = gql`
  mutation CREATE_QUESTION_MUTATION (
    $title: String!
    $url: String!
    $algorithm: [String]
    $dataStructure: [String]
    $solved: Boolean
    $difficulty: String
    $userSolution: String
    $notes: String
    $solution: String
    $timeSpent: Int
  ){
    createQuestion (
      title: $title
      url: $url
      algorithm: $algorithm
      dataStructure: $dataStructure
      solved: $solved
      difficulty: $difficulty
      userSolution: $userSolution
      notes: $notes
      solution: $solution
      timeSpent: $timeSpent
    ) {
      id
      title
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;

class CreateQuestion extends Component {
  state = {
    title: '',
    url: '',
    algorithm: [],
    dataStructure: [],
    solved: false,
    difficulty: null,
    userDifficulty: '',
    notes: '',
    userSolution: '',
    solution: '',
    timeSpent: 0,
  }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val,
    })
  }

  render() {
    const { title, url, algorithm, dataStructure, solved, difficulty, userDifficulty, notes, userSolution, solution, timeSpent } = this.state;

    return (
      <Mutation
        mutation={CREATE_QUESTION_MUTATION}
        variables={this.state}
      >
        {(createQuestion, { loading, error }) => (
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              const response = await createQuestion();
              console.log(response);
            }}
          >
            <fieldset disabled={loading}>
              <label htmlFor='title'>
                Title
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={this.handleChange}
                  required
                />
              </label>
              <label htmlFor='url'>
                Url
            <input
                  type="text"
                  id="url"
                  name="url"
                  placeholder="Question Url"
                  value={url}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor='userSolution'>
                Link to Your Solution Code
            <input
                  type="text"
                  id="userSolution"
                  name="userSolution"
                  placeholder="Link to your solution code..."
                  value={userSolution}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor='solution'>
                Link to Solution
            <input
                  type="text"
                  id="solution"
                  name="solution"
                  placeholder="Link to solution..."
                  value={solution}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor='notes'>
                Notes
            <textarea
                  type="text"
                  id="notes"
                  name="notes"
                  placeholder="Notes..."
                  value={notes}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor='timeSpent'>
                Time Spent on Problem
            <input
                  type="number"
                  id="timeSpent"
                  name="timeSpent"
                  placeholder="Minutes..."
                  value={timeSpent}
                  onChange={this.handleChange}
                />
              </label>
              <button type='submit'>
                Create
          </button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateQuestion;
export { CREATE_QUESTION_MUTATION };