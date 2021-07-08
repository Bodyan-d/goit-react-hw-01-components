import React from 'react';
import PropTypes from 'prop-types';
import './StatsElem.css';

function StatisticsElem({ stats }) {
  console.log(stats);
  return (
    <ul className="stat-list">
      {stats.map(stat => (
        <li className="item " key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  );
}

StatisticsElem.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default StatisticsElem;
