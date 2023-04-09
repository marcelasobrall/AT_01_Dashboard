import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const BadOverviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const BadOverview = () => {
  return (
    <div>
      <Title>Worst Stock Markets to Buy</Title>
      <BadOverviewContainer>
        <Card
          title="Venezuela"
          value="-25.3%"
          description="Political instability and hyperinflation have caused the Venezuelan stock market to collapse."
        />
        <Card
          title="Argentina"
          value="-12.1%"
          description="Argentina's economic crisis and currency devaluation have had a negative impact on its stock market."
        />
        <Card
          title="Turkey"
          value="-11.8%"
          description="Political instability and high inflation have caused the Turkish stock market to perform poorly."
        />
        <Card
          title="Brazil"
          value="-8.5%"
          description="Brazil's slow economic growth and political turmoil have contributed to a decline in its stock market."
        />
      </BadOverviewContainer>
    </div>
  );
};

export default BadOverview;
