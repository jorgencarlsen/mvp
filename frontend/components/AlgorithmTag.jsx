import React from 'react';
import styled from 'styled-components';
import { algorithmMap } from '../lib/algorithms';

const DataSpan = styled.span`
  background-color: ${({ theme }) => theme.darkSalmon};
  padding: 1px 4px;
  border-radius: 3px;
  margin-right: 5px;
  color: ${({ theme }) => theme.vibrantWhite};
`;

const DataStructureTag = ({ label }) => <DataSpan>{algorithmMap[label]}</DataSpan>;


export default DataStructureTag;
