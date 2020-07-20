import React, { useState, useCallback, useEffect } from "react";
import MapGL, { FlyToInterpolator } from "react-map-gl";
import { ScatterplotLayer } from "@deck.gl/layers";

import { config } from "../../../config";
import { data } from "../sampleData";
import InputBox from "./InputBox";

const layer = new ScatterplotLayer({
  id: "scatterplot-layer",
  data,
  pickable: true,
  opacity: 0.4,
  stroked: true,
  filled: true,
  radiusScale: 6,
  radiusMinPixels: 1,
  radiusMaxPixels: 100,
  lineWidthMinPixels: 1,
  getPosition: (d) => d.coordinates,
  getRadius: (d) => Math.sqrt(d.exits),
  getFillColor: (d) => [255, 140, 0],
  getLineColor: (d) => [0, 0, 0],
});

function Compose() {
  const [info, setInfo] = useState({
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 9,
    pitch: 0,
    bearing: 0,
    transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
    transitionDuration: 1000,
    searchInfo: "",
    isMain: true,
  });

  const mainSearchInput = useCallback(
    (vp) => {
      setInfo({
        ...info,
        searchInfo: vp.target.value,
      });
    },
    [info]
  );

  const goToViewPort = useCallback(
    (vp) => {
      setInfo({
        ...info,
        isMain: false,
        latitude: 37.5326,
        longitude: 127.024612,
        zoom: 11,
        transitionInterpolator: new FlyToInterpolator(),
        transitionDuration: 1000,
      });
    },
    [info]
  );

  useEffect(() => {
    if (info.isMain) {
      const interval = setInterval(() => {
        setInfo({
          ...info,
          latitude: info.latitude + 0.01,
          longitude: info.longitude + 0.01,
        });
      }, 100);
      return () => clearInterval(interval);
    }
    return;
  }, [info]);

  return (
    <MapGL
      {...info}
      width="100vw"
      height="100vh"
      // mapStyle="mapbox://styles/holee/ckcmzzc5y24hb1ip8lnkdt8sq"
      // mapboxApiAccessToken={config.MAPBOX_THEME}
      onViewportChange={(nextViewport) => setInfo({ ...info, ...nextViewport })}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken={config.MAPBOX_TOKEN}
    >
      {info.isMain ? (
        <InputBox
          info={info}
          setInfo={setInfo}
          mainSearchInput={mainSearchInput}
          goToViewPort={goToViewPort}
        />
      ) : (
        ""
      )}
    </MapGL>
  );
}

export default Compose;
