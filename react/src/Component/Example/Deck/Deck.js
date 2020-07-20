import React, { useState, useCallback } from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap, FlyToInterpolator } from "react-map-gl";
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

function Deck() {
  const [info, setInfo] = useState({
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 9,
    pitch: 0,
    bearing: 0,
    transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
    transitionDuration: 1000,
    searchInfo: "",
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
        latitude: 37.5326,
        longitude: 127.024612,
        zoom: 11,
        // transitionInterpolator: new FlyToInterpolator(),
        // transitionDuration: 800,
      });
    },
    [info]
  );

  return (
    <DeckGL
      initialViewState={info}
      controller={true}
      layers={[layer]}
      getTooltip={({ object }) => object && `${object.name}\n${object.address}`}
    >
      <StaticMap
        onViewportChange={(nextViewport) => setInfo({...info, ...nextViewport})}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={config.MAPBOX_TOKEN}
      ></StaticMap>
      <InputBox
        info={info}
        setInfo={setInfo}
        mainSearchInput={mainSearchInput}
        goToViewPort={goToViewPort}
      />
    </DeckGL>
  );
}

export default Deck;
