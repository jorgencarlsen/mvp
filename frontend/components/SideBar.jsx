import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const SideBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.5rem;
  padding-top: 50px;
  width: 200px;
  height: 100vh;
  background-color: ${({ theme }) => theme.base};
  -webkit-box-shadow: 4px 3px 14px 3px rgba(0,0,0,0.73);
  box-shadow: 1px 2px 10px 2px rgba(0,0,0,0.53);
`;

const SideBar = () => {

  return (
    <SideBarContainer>
      <h1>Prep Track</h1>
      <Link href='/questions'>
        <div>Questions</div>
      </Link>
      <Link href='/analytics'>
        <div>Analytics</div>
      </Link>
    </SideBarContainer>
  );
};

export default SideBar;