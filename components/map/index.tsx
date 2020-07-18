import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

import MapControls from './map-controls';

import mapBoxClient from '../../clients/mapbox';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  useEffect(() => {
    (async () => {
      return mapBoxClient.getTerrainData({
        x: viewport.latitude,
        y: viewport.longitude,
        z: viewport.zoom,
      });
    })();
  }, [viewport]);

  return (
    <div className="container map-container">
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(nextView) => {
          console.log(nextView);
          setViewport(nextView);
        }}
      >
        <MapControls />
      </ReactMapGL>
    </div>
  );
};

export default Map;

// https://api.mapbox.com/v4/mapbox.terrain-rgb/12.17012438742627/49.25399814740362/-122.90354786721365.pngraw?access_token=pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw

// https://api.mapbox.com/v4/mapbox.terrain-rgb/12.17012438742627/49.25399814740362/-122.90354786721365.pngraw/?access_token=pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw
