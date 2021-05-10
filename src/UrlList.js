/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import axios from 'axios';

import { Label } from 'jmdesign';

export default function UrlList(props) {
  const { data, changedState } = props;

  const handleLinkClick = shortCode => {
    changedState();
    axios.get(`http://localhost:3000/${shortCode}`);
  };

  const urlList = data.urls.map(url => {
    return (
      <li
        key={url.id}
        className="url-list"
        onClick={e => handleLinkClick(url.short_code)}>
        <a href={`http://localhost:3000/${url.short_code}`}>
          <Label label={url.title || 'No Title'} displayStyle="inline" />
          <div className="url-stats">
            <span className="url-label">
              <Label label="Url: " displayStyle="inline" />
              <Label label={url.full_url} displayStyle="inline" weight="400" />
            </span>
            <span className="url-label">
              <Label label="Short_Code: " displayStyle="inline" />
              <Label
                label={url.short_code}
                displayStyle="inline"
                weight="400"
              />
            </span>
            <span className="url-label">
              <Label label="Clicks: " displayStyle="inline" />
              <Label
                label={`${url.click_count}`}
                displayStyle="inline"
                weight="400"
              />
            </span>
          </div>
        </a>
      </li>
    );
  });

  return <ul>{urlList}</ul>;
}
