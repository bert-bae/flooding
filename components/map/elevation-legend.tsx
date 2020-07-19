import { elevationIndicators } from '../../constants/elevation-indicators';

const ElevationLegend = () => {
  const indicators = elevationIndicators.map((i) => {
    return (
      <div className="legend-indicator">
        <div className={`indicator ${i.text}-m`}></div>
        <p>{i.numerical}m+</p>
      </div>
    );
  });
  return <div className="elevation-legend">{indicators}</div>;
};

export default ElevationLegend;
