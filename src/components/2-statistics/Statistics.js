import React from 'react';
import PropTypes from 'prop-types';
import StatsElem from './StatisticsElement/StatsElem';
import './Statistics.css';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <StatsElem stats={stats} />
    </section>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
};
