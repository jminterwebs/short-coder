import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import UrlList from './UrlList';
import ShortCoder from './ShortCoder';

export default function App() {
  const [data, setData] = useState({ urls: [] });

  async function fetchData() {
    const result = await axios('http://localhost:3000', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        mode: 'no-cors'
      }
    });

    setData(result.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const changedState = () => {
    fetchData();
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Top 100 List</Link>
            </li>
            <li>
              <Link to="/create-code">Create a Short Code</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/create-code">
            <ShortCoder changedState={changedState} />
          </Route>
          <Route path="/">
            <UrlList data={data} changedState={changedState} />;
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
