import React from 'react';
import styles from './OverviewCard.module.css';

function OverviewCard() {
  const stocks = [
    { name: 'Apple', price: 145.96, prevClose: 143.75 },
    { name: 'Microsoft', price: 260.74, prevClose: 257.17 },
    { name: 'Google', price: 2238.50, prevClose: 2192.51 },
    { name: 'Amazon', price: 3332.00, prevClose: 3290.96 },
    { name: 'Facebook', price: 311.54, prevClose: 307.82 },
    { name: 'Tesla', price: 710.92, prevClose: 708.05 },
    { name: 'Netflix', price: 540.73, prevClose: 527.07 }
  ];

  return (
    <div className={styles['overview-card']}>
      <h2 className={styles['overview-card-title']}>Market Overview</h2>
      <table className={styles['overview-card-table']}>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Price</th>
            <th>Previous Close</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock.name}>
              <td>{stock.name}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{stock.prevClose.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OverviewCard;
