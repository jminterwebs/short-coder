import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UrlList from './UrlList';

function App() {
  const [data, setData] = useState({ urls: [] });

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3000', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          mode: 'no-cors'
        }
      });

      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <UrlList data={data} />
    </div>
  );
}

export default App;
