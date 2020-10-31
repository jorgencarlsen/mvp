import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: red;
`;

const Test = () => (
  <Wrapper>
    <Link href='/'>
      <a>Home</a>
    </Link>
  </Wrapper>
);

export default Test;