import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Toggle from 'react-toggle';
import Select from './Select';
import dataStructures from '../lib/dataStructures';
import algorithms from '../lib/algorithms';
import difficulties from '../lib/difficulties';

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
  width: 600px;
  border: 0;
  border-radius: 5px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.vibrantWhite};

  .header {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;

    h2 {
      margin-top: 0;
    }

    label {
      width: 100px;
      display: flex;
      flex-flow: row nowarap;
      justify-content: flex-end;
      align-items: center;
    }
  }

  label {
    font-size: 1.5rem;
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.vibrantWhite};
  }

  input {
    height: 40px;
    border-radius: 2px;
  }

  textarea {
    //border-radius: 10px;
  }

  input,
  textarea {
    color: ${({ theme }) => theme.vibrantWhite};
    outline: 0;
    border: 1px solid ${({ theme }) => theme.overlayLight};
    margin-top: .5rem;
    width: 100%;
    padding: 0.5rem;
    font-size: 1.8rem;
    background-color: ${({ theme }) => theme.overlayLight};
    transition: box-shadow 0.25s ease 0s, border-color 0.25s ease 0s;

    &:focus {
      outline: 0;
      border: 1px solid;
      border-color: rgba(76, 96, 133, 1);
      box-shadow: rgba(76, 96, 133, .85) 0px 0px 0px 1px;
    }
  }

  select {
    background-color: ${({ theme }) => theme.overlayLight};
  }

  .react-select-container {
    margin-top: 10px;

    &:focus {
      outline: 0;
      border: 1px solid;
      border-color: rgba(76, 96, 133, 1);
      box-shadow: rgba(76, 96, 133, .85) 0px 0px 0px 1px;
    }
  }

  .react-select__control {

    &:focus {
      outline: 0;
      border: 1px solid;
      border-color: rgba(76, 96, 133, 1);
      box-shadow: rgba(76, 96, 133, .85) 0px 0px 0px 1px;
    }
  }

  .margin-right {
    margin-right: 1rem;
  }

  .margin-bottom {
    margin-bottom: 1rem;
  }

  textarea {
    height: 100px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  fieldset {
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    border: 0;

    &[disabled] {
      opacity: 0.5;
    }
  }

  button {
    border: 0;
    outline: 0;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    color: ${({ theme }) => theme.vibrantWhite};
    background-color: ${({ theme }) => theme.blue};

    &:hover {
      opacity: .9;
    }
  }
`;

class CreateQuestion extends Component {
  state = {
    title: '',
    url: '',
    algorithm: [],
    dataStructure: [],
    solved: false,
    difficulty: null,
    userDifficulty: null,
    notes: '',
    userSolution: '',
    solution: '',
    timeSpent: 0,
  }

  componentDidMount() {
    if (this.props.question) {
      const { title, url, algorithm, dataStructure, solved, difficulty, userDifficulty, notes, userSolution, solution, timeSpent } = this.props.question;
      this.setState({
        title,
        url,
        algorithm,
        dataStructure,
        solved,
        difficulty,
        userDifficulty,
        notes,
        userSolution,
        solution,
        timeSpent
      })
    }
  }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val,
    })
  }

  handleSolved = (e) => {
    this.setState({
      solved: !this.state.solved,
    });
  }

  handleDataStructuresChange = (value) => {
    if (!value) {
      this.setState({
        dataStructure: [],
      })
    } else {
      const values = value.map(item => item.value);
      this.setState({
        dataStructure: values,
      });
    }
  }

  handleAlgorithmChange = (value) => {
    if (!value) {
      this.setState({
        algorithm: [],
      })
    } else {
      const values = value.map(item => item.value);
      this.setState({
        algorithm: values,
      });
    }
  }

  handleDifficultyChange = ({ value }) => {
    this.setState({
      difficulty: value,
    });
  }

  handleUserDifficultyChange = ({ value }) => {
    this.setState({
      userDifficulty: value,
    });
  }

  render() {
    const { title, url, algorithm, dataStructure, solved, difficulty, userDifficulty, notes, userSolution, solution, timeSpent } = this.state;
    const editing = this.props.question || null;

    const getDefaults = (selectOptions, options) => {
      if (options === null) return null;
      return selectOptions.filter(obj => {
        if (typeof options === 'string') {
          return options === obj.value;
        }
        return options.indexOf(obj.value) !== -1;
      });
    }


    const dataStructureDefaults = getDefaults(dataStructures, dataStructure);
    const difficultyDefaults = getDefaults(difficulties, difficulty);
    const userDifficultyDefaults = getDefaults(difficulties, userDifficulty);
    const algorithmDefaults = getDefaults(algorithms, algorithm);

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
              Router.push({ pathname: '/questions' });
            }}
          >
            <div className='header'>
              {editing && <h2>Edit Question</h2>}
              {!editing && <h2>Add a Question</h2>}
              <label htmlFor='solved'>
                <span className='margin-right'>Solved?</span>
                <Toggle
                  checked={solved}
                  name='solved'
                  value='yes'
                  onChange={this.handleSolved}
                />
              </label>
            </div>
            <fieldset disabled={loading}>
              <label htmlFor='title'>
                Title<span className='required'>*</span>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title..."
                  value={title}
                  onChange={this.handleChange}
                  required
                />
              </label>
              <label htmlFor='url'>
                Question URL
                <input
                  type="text"
                  id="url"
                  name="url"
                  placeholder="Question Url..."
                  value={url}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor='dataStructures'>
                <span className='margin-bottom'>Data Structures</span>
                <Select
                  data={dataStructures}
                  value={dataStructureDefaults}
                  changeHandler={this.handleDataStructuresChange}
                  multi={true}
                />
              </label>
              <label htmlFor='algorithm'>
                <span className='margin-bottom'>Algorithm</span>
                <Select
                  data={algorithms}
                  value={algorithmDefaults}
                  changeHandler={this.handleAlgorithmChange}
                  multi={true}
                />
              </label>
              <label htmlFor='difficulty'>
                <span className='margin-bottom'>Difficulty</span>
                <Select
                  data={difficulties}
                  value={difficultyDefaults}
                  changeHandler={this.handleDifficultyChange}
                  multi={false}
                />
              </label>
              <label htmlFor='userDifficulty'>
                <span className='margin-bottom'>Percieved Difficulty</span>
                <Select
                  data={difficulties}
                  value={userDifficultyDefaults}
                  changeHandler={this.handleUserDifficultyChange}
                  multi={false}
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
              <button type='submit'>
                Add Question
              </button>
            </fieldset>
          </Form>
        )
        }
      </Mutation>
    );
  }
}

export default CreateQuestion;
export { CREATE_QUESTION_MUTATION };