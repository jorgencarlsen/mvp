import React from 'react';
import styled from 'styled-components';
import PieChartComponent from './PieChartComponent';

const PieChartContainer = styled.div`
  height: 800px;
  width: 800px;
`;

const Analytics = () => {

  return (
    <PieChartContainer>
      <PieChartComponent />
    </PieChartContainer>
  );
}

export default Analytics;