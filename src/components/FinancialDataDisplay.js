// FinancialDataDisplay.js
import React from 'react';
import { useFinancialData } from './useFinancialData';

function FinancialDataDisplay() {
  const financialData = useFinancialData();

  return (
    <div>
      {financialData && (
        <div>
          <h2>Real-time Financial Data</h2>
          <p>Stock Name: {financialData.stockName}</p>
          <p>Price: {financialData.price}</p>
          <p>Timestamp: {financialData.timestamp}</p>
        </div>
      )}
    </div>
  );
}

export default FinancialDataDisplay;
