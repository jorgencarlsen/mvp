import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px;
  width: 200px;
  height: 100vh;
  background-color: ${({ theme }) => theme.base};
  -webkit-box-shadow: 4px 3px 14px 3px rgba(0,0,0,0.73);
  box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.53);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.div`
  width: 100%;
  height: 30px;
  padding: 2rem 1.2rem;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.seaGreen};
`;

const MenuItem = styled.div`
  width: 100%;
  height: 30px;
  padding: 1rem 1.2rem;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;

  &:hover {
    color: ${({ theme }) => theme.vibrantWhite};
    background-color: ${({ theme }) => theme.surface}
  }
`;

const SideBar = () => {

  return (
    <SideBarContainer>
      <Title>
        <Link href='/'>
          <h1>Prep Track</h1>
        </Link>
      </Title>
      <Link href='/questions'>
        <MenuItem>Questions</MenuItem>
      </Link>
      <Link href='/analytics'>
        <MenuItem>Analytics</MenuItem>
      </Link>
      <Link href='/createQuestion'>
        <MenuItem>Add a Question</MenuItem>
      </Link>
    </SideBarContainer>
  );
};

export default SideBar;