import React from 'react';
import ReactMapGL, { ViewportProps } from 'react-map-gl';

interface MapProps extends ViewportProps {
  mapboxApiAccessToken: string;
}

const Map: React.FC<MapProps> = ({ mapboxApiAccessToken, ...viewportProps }) => {
  return (
    <ReactMapGL
      {...viewportProps}
      mapboxApiAccessToken={mapboxApiAccessToken}
      width="100%"
      height="400px"
    />
  );
};

export default Map;