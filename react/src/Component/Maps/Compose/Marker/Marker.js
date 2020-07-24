import * as React from "react";
import { Marker } from "react-map-gl";

import covid_data from "../Data/covid-19";
import "./Marker.scss";

function Circle() {
  return covid_data.map((Data, i) => {
    if (Data.latitude !== "-") {
      return (
        <Marker
          key={i}
          longitude={parseFloat(Data.longitude)}
          latitude={parseFloat(Data.latitude)}
        >
          <div className="Circle" />
        </Marker>
      );
    }
  });
}

export default Circle;
