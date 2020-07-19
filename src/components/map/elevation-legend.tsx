import React from 'react';
import { elevationIndicators } from '../../constants/elevation-indicators';

const ElevationLegend = () => {
  const indicators = elevationIndicators.map((ele, i) => {
    return (
      <div className="legend-indicator" key={i}>
        <div className={`indicator ${ele.text}-m`}></div>
        <p>{ele.numerical}m+</p>
      </div>
    );
  });
  return <div className="elevation-legend">{indicators}</div>;
};

export default ElevationLegend;
