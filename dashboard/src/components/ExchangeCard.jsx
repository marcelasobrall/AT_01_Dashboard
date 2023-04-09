import React from 'react';
import styled from 'styled-components';

const ExchangeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem;
  min-width: 200px;
`;

const ExchangeCardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ExchangeRate = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ExchangeCard = ({ title, rate }) => {
  return (
    <ExchangeCardContainer>
      <ExchangeCardTitle>{title}</ExchangeCardTitle>
      <ExchangeRate>{rate}</ExchangeRate>
    </ExchangeCardContainer>
  );
};

export default ExchangeCard;
