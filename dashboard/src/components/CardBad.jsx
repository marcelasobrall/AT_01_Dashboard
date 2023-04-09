import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CardValue = styled.p`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const CardBad = ({ title, value, description }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardValue>{value}</CardValue>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default CardBad;
