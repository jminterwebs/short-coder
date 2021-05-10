/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

export default function ShortCoder(props) {
  const { changedState } = props;
  const [fullUrl, setUrl] = useState('');
  const [shortStatus, setShortStatus] = useState('');

  const handleSubmit = e => {
    axios
      .post(
        'http://localhost:3000/short_urls.json',
        {},
        {
          params: {
            full_url: fullUrl
          }
        }
      )
      .then(response => {
        setShortStatus(
          `Short Code Successful! New short code is ${response.data.short_code}`
        );
      })
      .catch(err => {
        setShortStatus('Invalid Url please make sure url is valid');
      });
    changedState();
  };

  return (
    <div>
      <label>Web Url: </label>
      <input
        type="text"
        value={fullUrl}
        onChange={e => setUrl(e.target.value)}
      />

      <input type="submit" value="Submit" onClick={handleSubmit} />
      <span className="warning-text">{shortStatus}</span>
    </div>
  );
}
