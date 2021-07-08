import React from 'react';
import PropTypes from 'prop-types';
import './Stats.css';

export default function Stats({ stats }) {
  return (
    <ul className="stats">
      <li className="stats-item followers">
        <p className="stats-title ">Followers</p>
        <span className="stats-number">{stats.followers}</span>
      </li>
      <li className="stats-item">
        <p className="stats-title">Views</p>
        <span className="stats-number">{stats.views}</span>
      </li>
      <li className="stats-item likes">
        <p className="stats-title">Likes</p>
        <span className="stats-number">{stats.likes}</span>
      </li>
    </ul>
  );
}

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
