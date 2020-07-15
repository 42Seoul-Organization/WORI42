import React, { useState, useEffect } from "react";
import MapGL from "react-map-gl";

import { config } from "../../../../config";

function MoveMap() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 7,
    bearing: 0,
    pitch: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setViewport({...viewport,latitude: viewport.latitude + 0.01})
      console.log(viewport)
    }, 100);
    return () => clearInterval(interval);
  }, [viewport]);

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

export default MoveMap;

// https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
