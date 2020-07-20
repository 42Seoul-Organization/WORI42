import React, { useState } from "react";
import MapGL, { Marker } from "react-map-gl";

import { config } from "../../../config";

function Line() {
  const [viewport, setViewport] = useState({
    latitude: 37.413,
    longitude: 127.26,
    latitude: 40.6643,
    longitude: -73.9385,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/holee/ckcmzzc5y24hb1ip8lnkdt8sq"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={config.MAPBOX_THEME}
    >
      <Marker latitude={40.6643} longitude={-73.9385}>
        <button>
          hi
        </button>
      </Marker>
    </MapGL>
  );
}

export default Line;

// https://studio.mapbox.com/styles/holee/ckcmzzc5y24hb1ip8lnkdt8sq/edit/#6.92/44.111/-80.412