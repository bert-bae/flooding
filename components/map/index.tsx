import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

import MapControls from './map-controls';
import ElevationLegend from './elevation-legend';

import mapBoxClient from '../../clients/mapbox';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
  });

  const [longitude, setLongitude] = useState(null);
  const [latitiude, setLatitude] = useState(null);
  const [pointElevation, setPointElevation] = useState(null);

  useEffect(() => {
    console.log(pointElevation);
  }, [longitude, latitiude]);

  return (
    <div className="map-container">
      <ReactMapGL
        {...viewport}
        mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        maxZoom={15}
        minZoom={10}
        onViewportChange={(nextView) => {
          setViewport(nextView);
        }}
        // onClick={async (event) => {
        //   setLongitude(event.lngLat[0]);
        //   setLatitude(event.lngLat[1]);
        //   setPointElevation(
        //     await mapBoxClient.getTileQueryElevation(
        //       event.lngLat[0],
        //       event.lngLat[1]
        //     )
        //   );
        // }}
      >
        <ElevationLegend />
        <MapControls />
      </ReactMapGL>
    </div>
  );
};

export default Map;

// https://api.mapbox.com/v4/mapbox.terrain-rgb/12.17012438742627/49.25399814740362/-122.90354786721365.pngraw?access_token=pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw

// https://api.mapbox.com/v4/mapbox.terrain-rgb/12.17012438742627/49.25399814740362/-122.90354786721365.pngraw/?access_token=pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw
