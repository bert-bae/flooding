import * as React from 'react';
import * as ReactMapGl from 'react-map-gl';

const MapControls = () => {
  return (
    <div className="map-controls-container">
      <ReactMapGl.GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
      <ReactMapGl.NavigationControl />
    </div>
  );
};

export default MapControls;
