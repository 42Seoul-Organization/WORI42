import React, { useState } from "react";
import "./SideBar.scss";
// import MyMarker from "./Marker";
import UserInput from "../userinput/UserInput";

function SideBar({func_create, func_submit}) {
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
          <UserInput func_create={func_create} func_submit={func_submit}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SideBar;