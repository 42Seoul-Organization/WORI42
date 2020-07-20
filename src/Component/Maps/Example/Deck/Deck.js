import React from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";
import {ScatterplotLayer} from '@deck.gl/layers';

import { config } from "../../../../config";
import { data } from "../sampleData";

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 9,
  pitch: 0,
  bearing: 0,
};

// Data to be used by the LineLayer
// const data = [
//   {
//     sourcePosition: [-122.41669, 37.7853],
//     targetPosition: [-122.41669, 37.781],
//   },
// ];

const layer = new ScatterplotLayer({
  id: 'scatterplot-layer',
  data,
  pickable: true,
  opacity: 0.4,
  stroked: true,
  filled: true,
  radiusScale: 6,
  radiusMinPixels: 1,
  radiusMaxPixels: 100,
  lineWidthMinPixels: 1,
  getPosition: d => d.coordinates,
  getRadius: d => Math.sqrt(d.exits),
  getFillColor: d => [255, 140, 0],
  getLineColor: d => [0, 0, 0]
});

function Deck() {
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[layer]}
      getTooltip={({object}) => object && `${object.name}\n${object.address}`}
    >
      <StaticMap
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={config.MAPBOX_TOKEN}
      >
      </StaticMap>
    </DeckGL>
  );
}

export default Deck;
