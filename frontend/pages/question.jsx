import React, { Component } from 'react';
import Link from 'next/link';
import QuestionDetails from '../components/QuestionDetails';

const QuestionPage = ({ query }) => <QuestionDetails id={query.id} />;

QuestionPage.getInitialProps = ({ query }) => {
  return { query }
};

export default QuestionPage;