import React, { useState } from "react";
import "./SideBar.css";
// import MyMarker from "./Marker";
import UserInput from "../userinput/UserInput";

function SideBar({func_create}) {
  const [markerList, setMarkerList] = useState([]);

  return (
    <React.Fragment>
      <div className="board__box">
        <input type="checkbox" id="menuicon" />
        <label for="menuicon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="sidebar">
          <UserInput func_create={func_create} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default SideBar;