import React from 'react';
import styled, { css } from 'styled-components';

const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props => props.positive && css`
    border-left: 5px solid #26C281;
  `}

  ${props => props.negative && css`
    border-left: 5px solid #E74C3C;
  `}
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

const CardValue = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`;

const CardPercentage = styled.p`
  font-size: 1.2rem;
  margin: 0;
  margin-left: 0.5rem;
  color: ${props => props.positive ? '#26C281' : '#E74C3C'};

  ${props => props.positive && css`
    &::before {
      content: '+';
    }
  `}
`;

const Card = ({ title, value, percentage, positive, negative }) => {
  return (
    <CardWrapper positive={positive} negative={negative}>
      <div>
        <CardTitle>{title}</CardTitle>
        <CardValue>{value}</CardValue>
      </div>
      <CardPercentage positive={positive}>{percentage}%</CardPercentage>
    </CardWrapper>
  );
}

export default Card;
