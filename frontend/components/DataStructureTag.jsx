import React from 'react';
import styled from 'styled-components';
import { dataStructureMap } from '../lib/dataStructures';

const DataSpan = styled.span`
  background-color: ${({ theme }) => theme.blue};
  padding: 1px 4px;
  border-radius: 3px;
  margin-right: 5px;
  color: ${({ theme }) => theme.vibrantWhite};
`;

const DataStructureTag = ({ label }) => <DataSpan>{dataStructureMap[label]}</DataSpan>;


export default DataStructureTag;
