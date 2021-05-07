import React from 'react';

import { Label } from 'jmdesign';

export default function UrlList(props) {
  const { data } = props;

  const urlList = data.urls.map(url => {
    return (
      <li key={url.id} className="url-list">
        <Label label={url.title || 'No Title'} displayStyle="inline" />
        <div className="url-stats">
          <span className="url-label">
            <Label label="Url: " displayStyle="inline" />
            <Label label={url.full_url} displayStyle="inline" weight="400" />
          </span>
          <span className="url-label">
            <Label label="Short_Code: " displayStyle="inline" />
            <Label label={url.short_code} displayStyle="inline" weight="400" />
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
      </li>
    );
  });

  return <ul>{urlList}</ul>;
}
