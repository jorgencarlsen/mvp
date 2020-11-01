import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.surface};
`;

const Analytics = () => (
  <Wrapper>
    <div>I am the Analytics page</div>
  </Wrapper>
);

export default Analytics;