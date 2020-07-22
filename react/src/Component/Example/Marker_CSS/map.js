import React, { useState, useCallback } from "react";
import MapGL, { FlyToInterpolator, NavigationControl } from "react-map-gl";

import MAPBOX_TOKEN from "../config";
import ControlPanel from "./control-panel";
import Circle from "./Marker";

// import RealNode from "./RealNode";

function ReactMapGL() {
  const [viewport, setViewport] = useState({
    latitude: 37.5326,
    longitude: 127.024612,
    zoom: 5.5,
    bearing: 0,
    pitch: 0,
    transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
    transitionDuration: 1000,
  });

  const goToViewPort = useCallback(
    (vp) => {
      console.log("ok?");
      setViewport({
        ...viewport,
        latitude: vp.latitude,
        longitude: vp.longitude,
        zoom: 11,
        // transitionInterpolator: new FlyToInterpolator(),
        // transitionDuration: 800,
      });
    },
    [viewport]
  );

  return (
    <React.Fragment>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        transitionInterpolator={new FlyToInterpolator()}
        mapStyle="mapbox://styles/mapbox/light-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {/* <RealNode /> */}
        <Circle />
        <ControlPanel onViewportChange={goToViewPort} />
        <div style={{ position: "absolute", right: 0, top: 0 }}>
          <NavigationControl />
        </div>
      </MapGL>
    </React.Fragment>
  );
}

export default ReactMapGL;