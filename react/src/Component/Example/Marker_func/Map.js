import React, { useState } from "react";
import ReactMapGL, { Popup } from "react-map-gl";
import Pins from "./pins";
import CITIES from "./cities.json";
import { render } from "react-dom";
import ControlPanel from "./control-panel";
import { config } from "./config.js";

const MAPBOX_TOKEN = config.MAPBOX_TOKEN; // Set your mapbox token here

function Map(containerComponent) {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 38,
    longitude: 128,
    zoom: 8,
    bearing: 0,
    pitch: 0,
  });
  const [popupInfo, setPopupinfo] = useState(null);

  const _updateViewport = (viewport) => {
    setViewport(viewport);
  };

  const _onClickMarker = (city) => {
    setPopupinfo(city);
  };

  const _renderPopup = () => {
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => setPopupinfo(null)}
        ></Popup>
      )
    );
  };

  return (
    <div>
      <ReactMapGL
        {...viewport}
        onViewportChange={(viewport) => _updateViewport(viewport)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Pins data={CITIES} onClick={() => _onClickMarker()} />
        {_renderPopup()}
        <ControlPanel containerComponent={containerComponent} />
      </ReactMapGL>
    </div>
  );
}

export default Map;

export function renderToDom(container) {
  render(<Map />, container);
}
