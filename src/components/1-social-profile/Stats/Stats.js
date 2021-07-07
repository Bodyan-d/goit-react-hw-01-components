import React from 'react';
import './Stats.css';

export default function Stats({ stats: { followers, views, likes } }) {
  return (
    <ul className="stats">
      <li className="stats-item followers">
        <p className="stats-title ">Followers</p>
        <span className="stats-number">{followers}</span>
      </li>
      <li className="stats-item">
        <p className="stats-title">Views</p>
        <span className="stats-number">{views}</span>
      </li>
      <li className="stats-item likes">
        <p className="stats-title">Likes</p>
        <span className="stats-number">{likes}</span>
      </li>
    </ul>
  );
}
