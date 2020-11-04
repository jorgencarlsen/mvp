import React from 'react';
import styled from 'styled-components';
import Analytics from '../components/Analytics';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.surface};
`;

const AnalyticsPage = () => (
  <Wrapper>
    <Analytics />
  </Wrapper>
);

export default AnalyticsPage;