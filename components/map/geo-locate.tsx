import { GeolocateControl } from 'react-map-gl';

const GeoLocate = () => {
  return (
    <div className="geo-location-container">
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
    </div>
  );
};

export default GeoLocate;
