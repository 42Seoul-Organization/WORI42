import React, { useState } from "react";
import { Marker } from "react-map-gl";
import "./RealNode.css";

// function Circle() {
//   return covid_data.map((Data, i) => {
//     // console.log(Data);
//     if (Data.latitude !== "-") {
//       return (
//         <Marker
//           key={i}
//           longitude={parseFloat(Data.longitude)}
//           latitude={parseFloat(Data.latitude)}
//         >
//           <div className="Circle" />
//         </Marker>
//       );
//     }
//   });
// }

function Draggable() {
  // const [state, setState] = useState({
  //   latitude: "37.5326",
  //   longitude: "127.024612",
  //   draggable: "false",
  // });

  return (
    <Marker latitude="37.5326" longitude="127.024612" draggable="false">
      <div className="Drag" />
    </Marker>
  );
}

export default Draggable;
