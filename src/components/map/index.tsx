import * as React from 'react';
import ReactMapGL from 'react-map-gl';

import Context from '../../context';
import MapControls from './map-controls';
import ElevationLegend from './elevation-legend';
import CoordinateSearch from './coordinate-search';
// import mapBoxClient from '../../clients/mapbox';

import { IViewport } from '../../types/mapbox-types';
import * as config from '../../config/env-config.json';

const MAX_ZOOM = 14;
const MIN_ZOOM = 12;

const Map = () => {
  const [context, setContext] = React.useContext(Context);
  const [viewport, setViewport] = React.useState({
    width: '100%',
    height: '100%',
    latitude: 49.285743,
    longitude: -123.125348,
    zoom: MAX_ZOOM,
  });

  React.useEffect(() => {
    setContext({
      latitude: 49.285743,
      longitude: -123.125348,
    });
  }, []);

  return (
    <div className="map-container">
      <ReactMapGL
        {...viewport}
        mapStyle={config.MAPBOX_STYLE}
        mapboxApiAccessToken={config.MAPBOX_ACCESS_TOKEN}
        minZoom={MIN_ZOOM}
        maxZoom={MAX_ZOOM}
        onViewportChange={(nextView: IViewport): void => {
          setContext({
            longitude: nextView.longitude,
            latitude: nextView.latitude,
          });
          setViewport(nextView);
        }}
      >
        <CoordinateSearch />
        <ElevationLegend />
        <MapControls />
      </ReactMapGL>
    </div>
  );
};

export default Map;
