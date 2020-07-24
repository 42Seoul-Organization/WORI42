import * as React from "react";
import { Marker } from "react-map-gl";
import "./RealNode.css";
import covid_data from "./covid-19";

function Circle() {
  return covid_data.map((Data, i) => {
    // console.log(Data);
    if (Data.latitude !== "-") {
      if (Data.group === "NEW") {
        return (
          <Marker
            key={i}
            longitude={parseFloat(Data.longitude)}
            latitude={parseFloat(Data.latitude)}
          >
            <div className="Circle2" />
          </Marker>
        );
      } else {
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
    }
  });
}

export default Circle;
