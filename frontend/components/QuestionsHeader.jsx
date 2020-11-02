import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
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

const QuestionsHeader = () => (
  <Header>
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
  </Header>
);

export default QuestionsHeader;