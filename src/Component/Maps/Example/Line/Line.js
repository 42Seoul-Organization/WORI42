import React, { useState, useEffect } from "react";
import MapGL from "react-map-gl";

import { config } from "../../../../config";

function Line() {
  const [viewport, setViewport] = useState({
    latitude: 37.413,
    longitude: 127.26,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={config.MAPBOX_TOKEN}
    />
  );
}

export default Line;
