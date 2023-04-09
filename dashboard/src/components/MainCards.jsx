import React from 'react';
import Card from './Card';

const MainCards = () => {
  return (
    <div className="main-cards">
      <Card 
        title="Revenue" 
        value="$16,824"
        percentage="3.7"
        positive
      />
      <Card 
        title="Costs" 
        value="$12,121"
        percentage="1.7"
        negative
      />
      <Card 
        title="Customers" 
        value="1,200"
        percentage="1.2"
        positive
      />
      <Card 
        title="Dollar" 
        value="R$ 5,60"
        percentage="0.8"
        positive
      />
      <Card 
        title="IOF" 
        value="1.1%"
        percentage="0.5"
        negative
      />
    </div>
  );
}

export default MainCards;