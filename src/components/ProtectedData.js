// ProtectedData.js
import React, { useState, useEffect } from 'react';
import { fetchProtectedData } from './auth';

function ProtectedData({ token }) {
  const [protectedData, setProtectedData] = useState('');

  useEffect(() => {
    async function fetchData() {
      if (token) {
        try {
          const data = await fetchProtectedData(token);
          setProtectedData(data);
        } catch (error) {
          console.error('Error fetching protected data', error);
        }
      }
    }

    fetchData();
  }, [token]);

  return (
    <div>
      <h2>Protected Data</h2>
      <p>{protectedData}</p>
    </div>
  );
}

export default ProtectedData;
