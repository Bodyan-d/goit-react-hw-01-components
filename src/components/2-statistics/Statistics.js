import React from 'react';
import StatsElem from './StatisticsElement/StatsElem';
import './Statistics.css';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      
        <h2 className="title">{title}</h2>
        <StatsElem stats={stats} />
      
    </section>
  );
}

export default Statistics;
