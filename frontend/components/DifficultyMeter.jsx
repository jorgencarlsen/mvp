import React from 'react';
import styled from 'styled-components';

const colors = {
  VERY_EASY: 'rgba(97, 208, 149, .1)',
  VERY_EASY_PLUS: 'rgba(97, 208, 149, 1)',
  EASY: 'rgba(67, 151, 117, .1)',
  EASY_PLUS: 'rgba(67, 151, 117, 1)',
  MEDIUM: 'rgba(57, 160, 237, .1)',
  MEDIUM_PLUS: 'rgba(57, 160, 237, 1)',
  HARD: 'rgba(255, 102, 99, .1)',
  HARD_PLUS: 'rgba(255, 102, 99, 1)',
  VERY_HARD: 'rgba(255, 134, 0, .1)',
  VERY_HARD_PLUS: 'rgba(255, 134, 0, 1)',
  EXTREMELY_HARD: 'rgba(252, 255, 108, .1)',
  EXTREMELY_HARD_PLUS: 'rgba(252, 255, 108, 1)',
}

const Outer = styled.div`
margin: 1rem 0;
`;

const Container = styled.div`
  width: 400px;
  height: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-radius: 4px;
`;

const VeryEasy = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ difficulty }) => difficulty ? colors.VERY_EASY_PLUS : colors.VERY_EASY};
  border: ${({ difficulty }) => difficulty ? '1px solid white' : 0};
`;

const Easy = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ difficulty }) => difficulty ? colors.EASY_PLUS : colors.EASY};
  border: ${({ difficulty }) => difficulty ? '1px solid white' : 0};
`;

const Medium = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ difficulty }) => difficulty ? colors.MEDIUM_PLUS : colors.MEDIUM};
  border: ${({ difficulty }) => difficulty ? '1px solid white' : 0};
`;

const Hard = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ difficulty }) => difficulty ? colors.HARD_PLUS : colors.HARD};
  border: ${({ difficulty }) => difficulty ? '1px solid white' : 0};
`;

const VeryHard = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ difficulty }) => difficulty ? colors.VERY_HARD_PLUS : colors.VERY_HARD};
  border: ${({ difficulty }) => difficulty ? '1px solid white' : 0};
`;

const ExtremelyHard = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ difficulty }) => difficulty ? colors.EXTREMELY_HARD_PLUS : colors.EXTREMELY_HARD};
  border: ${({ difficulty }) => difficulty ? '1px solid white' : 0};
`;

const Label = styled.div`

`;

const DifficultyMeter = ({ difficulty, label }) => {

  const diffMap = {
    VERY_EASY: false,
    EASY: false,
    MEDIUM: false,
    HARD: false,
    VERY_HARD: false,
    EXTREMELY_HARD: false,
  }
  if (difficulty) {
    diffMap[difficulty] = true;
  }

  return (
    <Outer>
      <Label>
        {label}
      </Label>
      <Container>
        <VeryEasy difficulty={diffMap.VERY_EASY} />
        <Easy difficulty={diffMap.EASY} />
        <Medium difficulty={diffMap.MEDIUM} />
        <Hard difficulty={diffMap.HARD} />
        <VeryHard difficulty={diffMap.VERY_HARD} />
        <ExtremelyHard difficulty={diffMap.EXTREMELY_HARD} />
      </Container>
    </Outer>
  );
}

export default DifficultyMeter;