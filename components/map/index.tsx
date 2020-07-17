import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

import MapControls from './map-controls';
import MapNavigation from './map-navigation';
import GeoLocate from './geo-locate';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <div className="container map-container">
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(nextView) => setViewport(nextView)}
      >
        <MapControls />
      </ReactMapGL>
    </div>
  );
};

export default Map;
