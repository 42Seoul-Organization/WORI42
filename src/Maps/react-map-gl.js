import * as React from "react";
import { useState } from "react";
import MapGL from "react-map-gl";
import { config } from "../config";

// const MAPBOX_TOKEN = ; // Set your mapbox token here

function ReactMapGL() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
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

export default ReactMapGL;
