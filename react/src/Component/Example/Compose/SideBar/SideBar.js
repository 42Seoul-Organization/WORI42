import React from "react";
import "./SideBar.scss";
import UserInput from "../userinput/UserInput";

function SideBar({func_create, func_submit}) {
  return (
    <React.Fragment>
      <div className="board_box">
        <input type="checkbox" id="menuicon" />
        <label htmlFor="menuicon">
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