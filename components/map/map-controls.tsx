import { GeolocateControl, NavigationControl } from 'react-map-gl';

const MapControls = () => {
  return (
    <div className="map-controls-container">
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
      <NavigationControl />
    </div>
  );
};

export default MapControls;
